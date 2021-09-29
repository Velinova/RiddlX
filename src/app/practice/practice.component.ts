import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { ToastrService } from "ngx-toastr";
import { StreamState } from "../interfaces";
import { AudioService } from "../services/audio.service";
import { DragonService } from "../services/dragon.service";
import { LetterService } from "../services/letter.service";
import { SoundsService } from "../services/sounds.service";
import { AchievementType } from "../services/types";

@Component({
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {
  user: string;
  letters: any[];
  answers: any[];
  imageSrc: string;
  isWrong: boolean;
  hideNext: boolean;
  isCorrect: boolean;
  imageLetters: any[];
  showSuccess: boolean;

  // #region Player

  state: StreamState;
  files: Array<any> = [];

  // #endregion Player

  constructor(
    private toastr: ToastrService,
    private audioService: AudioService,
    private soundService: SoundsService,
    private dragonService: DragonService,
    private cookieService: CookieService,
    private letterService: LetterService) {
    this.answers = [];
    this.imageSrc = '';
    this.isWrong = false;
    this.hideNext = false;
    this.isCorrect = false;
    this.showSuccess = false;
    this.user = this.cookieService.get('name');

    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false
    };

    this.soundService.getFiles().subscribe(files => {
      this.files = files;
    });

    this.letters = this.letterService.getLetters();
    this.imageLetters = this.letterService.getLetters();
    this.imageLetters.map((x) => { x.isShown = false });
    var random = Math.floor(Math.random() * this.imageLetters.length) + 1;
    var letter = this.letters.find((x) => { return x.Id === random; }).Letter;
    this.imageSrc = this.letterService.getLetterImage(letter);
    this.imageLetters.find((x) => { return x.Id === random; }).isShown = true;
  }

  drop(event: CdkDragDrop<any[]>): void {
    this.isWrong = false;
    this.isCorrect = false;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (this.answers.length > 0) {
        let letter = this.letters.find((x) => { return x.Id === Number(event.item.element.nativeElement.id) });
        this.answers[0] = letter;
        if (this.imageSrc[0].toLowerCase() !== letter.Letter.toLowerCase())
          this.isWrong = true;
        else
          this.isCorrect = true;

        return;
      }

      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

      let letter = this.letters.find((x) => { return x.Id === Number(event.item.element.nativeElement.id) }).Letter;
      if (this.imageSrc[0].toLowerCase() !== letter.toLowerCase())
        this.isWrong = true;
      else
        this.isCorrect = true;
    }
  }

  next(): void {
    let dragons = this.dragonService.getDragons().filter(x => x.Type == AchievementType.Practice);

    let dragon = dragons.find((x: any) => { return x.Letter === this.answers[0].Letter });
    let dragonsCookie = [];

    if (this.cookieService.get('dragons') !== '') {
      dragonsCookie = JSON.parse(this.cookieService.get('dragons'));
      if (dragon) // in our case this will always be true, but we need to satisfy the typescript compiler
        dragonsCookie.push(dragon.Letter);

      this.cookieService.set('dragons', JSON.stringify(dragonsCookie), undefined, '/');
    } else {
      if (dragon) // in our case this will always be true, but we need to satisfy the typescript compiler
        dragonsCookie.push(dragon.Letter);

      this.cookieService.set('dragons', JSON.stringify(dragonsCookie), undefined, '/');
    }

    this.toastr.success('Пронајде ново змејче!', 'Браво!');

    while (true) {
      var random = Math.floor(Math.random() * this.imageLetters.length) + 1;
      var letterObj = this.letters.find((x) => { return x.Id === random; });
      var imageLetterObj = this.imageLetters.find((x) => { return x.Letter === letterObj.Letter; });

      if (imageLetterObj.isShown)
        continue;

      var letter = letterObj.Letter;

      this.imageSrc = this.letterService.getLetterImage(letter);

      this.hideNext = this.imageLetters.filter((x) => { return x.isShown; }).length === this.imageLetters.length - 1;
      this.answers = [];
      this.isCorrect = false;
      this.isWrong = false;

      this.imageLetters.find((x) => { return x.Id === random; }).isShown = true;

      break;
    }
  }

  finish(): void {
    let dragons = this.dragonService.getDragons().filter(x => x.Type == AchievementType.Practice);

    let dragon = dragons.find((x: any) => { return x.Letter === this.answers[0].Letter });
    let dragonsCookie = [];

    if (this.cookieService.get('dragons') !== '') {
      dragonsCookie = JSON.parse(this.cookieService.get('dragons'));
      if (dragon) // in our case this will always be true, but we need to satisfy the typescript compiler
        dragonsCookie.push(dragon.Letter);

      this.cookieService.set('dragons', JSON.stringify(dragonsCookie), undefined, '/');
    } else {
      if (dragon) // in our case this will always be true, but we need to satisfy the typescript compiler
        dragonsCookie.push(dragon.Letter);

      this.cookieService.set('dragons', JSON.stringify(dragonsCookie), undefined, '/');
    }

    this.toastr.success('Пронајде ново змејче!', 'Браво!');

    let lastPassedLevel = Number(JSON.parse(this.cookieService.get('level-passed')));
    if (lastPassedLevel >= 0)
      return;

    this.cookieService.set('level-passed', '0', undefined, '/');

    this.showSuccess = true;
  }

  sortBy(prop: string) {
    return this.letters.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  getImageText(): string {
    return this.imageSrc.substring(0, 0) + '' + this.imageSrc.substring(1, this.imageSrc.length - 4);
  }

  isUsed(letter: string): boolean {
    return this.imageLetters.find((x) => { return x.Letter === letter; }).isShown;
  }

  listen(): void {
    let word = this.imageSrc.replace('.png', '');
    let wordSound = this.files.filter((file) => { return file.text.toLowerCase() === word.toLowerCase() && file.text.length > 1; })[0];
    this.audioService.playStream(wordSound.url).subscribe(() => { });
  }

  listenLetter(letter: string): void {
    let letterSound = this.files.filter((file) => { return file.text.toLowerCase() === letter.toLowerCase(); })[0];
    this.audioService.playStream(letterSound.url).subscribe(() => { });
  }

  delete(): void {
    this.answers = [];
    this.isCorrect = false;
    this.isWrong = false;
  }

  noReturnPredicate() {
    return false;
  }
}
