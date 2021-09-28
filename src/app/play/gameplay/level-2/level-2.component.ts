import { CdkDragDrop, copyArrayItem, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { ToastrService } from "ngx-toastr";
import { StreamState } from "../../../interfaces";
import { LetterService } from "../../../services/letter.service";
import { AudioService } from "../../../services/audio.service";
import { DragonService } from "../../../services/dragon.service";
import { LevelService } from "../../../services/level.service";
import { SoundsService } from "../../../services/sounds.service";
import { AchievementType } from "../../../services/types";

@Component({
  selector: 'level-2',
  templateUrl: './level-2.component.html',
  styleUrls: ['./level-2.component.scss']
})
export class Level2Component implements OnInit {
  word: string;
  user: string;
  current: any;
  index: number;
  letters: any[];
  answers: any[];
  words: string[];
  isWrong: boolean;
  imageSrc: string;
  isCorrect: boolean;
  hideNext: boolean;
  showSuccess: boolean;
  wordLetters: any[];
  imageLetters: any[];

  // #region Player

  state: StreamState;
  files: Array<any> = [];

  // #endregion Player

  constructor(
    private audioService: AudioService,
    private levelService: LevelService,
    private soundService: SoundsService,
    private cookieService: CookieService,
    private letterService: LetterService,
    private dragonService: DragonService,
    private toastr: ToastrService
  ) {
    this.user = '';
    this.words = [];
    this.answers = [];
    this.isWrong = false;
    this.isCorrect = false;
    this.hideNext = false;
    this.showSuccess = false;
    this.letters = this.letterService.getLetters();
    this.words = this.levelService.getLevelTwoWords();

    this.imageLetters = this.letterService.getLetters();
    this.imageLetters.map((x) => { x.isShown = false });
    let random = Math.floor(Math.random() * this.imageLetters.length);
    this.index = random;
    let letter = this.letters[random].Letter;
    this.current = this.letters[random];
    this.imageSrc = this.letterService.getLetterImage(letter);
    this.imageLetters[random].isShown = true;

    this.word = this.words[this.index];
    this.wordLetters = [];
    let wordCharArray = Array.from(this.words[random]);

    for (let i = 0; i < wordCharArray.length; i++ in wordCharArray) {
      this.wordLetters.push({ Id: i, Letter: wordCharArray[i].toUpperCase(), IsVowel: this.isVowel(wordCharArray[i].toLowerCase()) });
      this.answers.push(null);
    }

    this.wordLetters = this.shuffle(this.wordLetters);

    this.soundService.getFiles().subscribe(files => {
      this.files = files;
    });

    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false
    };
  }

  ngOnInit(): void {
    this.user = this.cookieService.get('name');
    this.words = this.levelService.getLevelTwoWords();
  }

  listenWord(word: string): void {
    let wordSound = this.files.find((x) => { return !x.isLetter && x.text.toLowerCase() === word.toLowerCase() });
    this.audioService.playStream(wordSound.url).subscribe(() => { });
  }

  listenLetter(letter: string): void {
    let letterSound = this.files.find((x) => { return x.isLetter && x.text.toLowerCase() === letter.toLowerCase() });
    this.audioService.playStream(letterSound.url).subscribe(() => { });
  }

  // #region Drag-drop

  drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (this.word.length > 0)
        return;
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

      //let letter = this.letters.find((x) => { return x.Id === Number(event.item.element.nativeElement.id) }).Letter;
      //let word = this.words[this.counter];

      //if (word.firstLetter().toLowerCase() !== letter.toLowerCase())
      //this.isWrong.first = true;
      //else
      //this.isCorrect.first = true;
    }
  }

  noReturnPredicate(): boolean { return false; }

  // #endregion

  isVowel(c: string): boolean {
    return ['а', 'е', 'и', 'о', 'у'].indexOf(c.toLowerCase()) !== -1
  };

  shuffle(array: string[]): string[] {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  // #region Options

  addLetter(index: number): void {
    let letter = this.wordLetters[index];
    if (letter.isDisabled)
      return;

    this.wordLetters[index].isDisabled = true;
    let firstNullIndex = this.answers.indexOf(null);
    this.answers[firstNullIndex] = letter;

    if (this.wordLetters.filter((x) => { return !x.isDisabled; }).length === 0)
      this.validateAnswer();
  }

  removeLetter(index: number): void {
    let letter = this.answers[index].Letter;
    this.wordLetters.find((x) => { return x.Letter == letter && x.isDisabled }).isDisabled = false;
    this.answers[index] = null;
    this.isWrong = false;
    this.isCorrect = false;
  }

  validateAnswer(): void {
    this.isWrong = false;
    this.isCorrect = false;
    for (let i = 0; i < this.answers.length; i++) {
      if (this.words[this.index][i].toLowerCase() !== this.answers[i].Letter.toLowerCase()) {
        this.isWrong = true;
        break;
      }
    }

    this.isCorrect = !this.isWrong;
  }

  showLetter(): void {
    let random = -1;
    while (true) {
      random = Math.floor(Math.random() * this.wordLetters.length);
      if (!this.wordLetters[random].isDisabled) {
        break;
      }
    }
    let indexInWord = this.word.indexOf(this.wordLetters[random].Letter);
    if (this.answers[indexInWord] !== null) {
      indexInWord = this.word.indexOf(this.wordLetters[random].Letter, indexInWord + 1);
      if (this.answers[indexInWord] !== null) {
        indexInWord = this.word.indexOf(this.wordLetters[random].Letter, indexInWord + 1);
      }
    }
    this.answers[indexInWord] = this.wordLetters[random];
    this.wordLetters[random].isDisabled = true;

    if (this.wordLetters.filter((x) => { return !x.isDisabled; }).length === 0)
      this.validateAnswer();
  }

  areAllDisabled(): boolean {
    return this.wordLetters.filter((x) => { return x.isDisabled }).length === this.wordLetters.length;

  }

  next(): void {
    let dragons = this.dragonService.getDragons().filter(x => x.Type == AchievementType.Play);

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

    this.toastr.success('Доби ново змејче!', 'Браво!');

    while (true) {
      var random = Math.floor(Math.random() * this.imageLetters.length);
      var letterObj = this.letters[random];
      var imageLetterObj = this.imageLetters.find((x) => { return x.Letter === letterObj.Letter; });

      if (imageLetterObj.isShown)
        continue;

      var letter = letterObj.Letter;

      this.imageSrc = this.letterService.getLetterImage(letter);

      //reinitialize
      this.hideNext = this.imageLetters.filter((x) => { return x.isShown; }).length === this.imageLetters.length - 1;
      this.answers = [];
      this.isCorrect = false;
      this.isWrong = false;
      this.index = random;
      this.current = this.letters[random];
      this.imageSrc = this.letterService.getLetterImage(letter);
      this.imageLetters[random].isShown = true;

      this.word = this.words[this.index];
      this.wordLetters = [];
      let wordCharArray = Array.from(this.words[random]);

      for (let i = 0; i < wordCharArray.length; i++ in wordCharArray) {
        this.wordLetters.push({ Id: i, Letter: wordCharArray[i].toUpperCase(), IsVowel: this.isVowel(wordCharArray[i].toLowerCase()) });
        this.answers.push(null);
      }

      this.wordLetters = this.shuffle(this.wordLetters);

      this.imageLetters.find((x) => { return x.Id === random; }).isShown = true;

      break;
    }
  }

  finish(): void {
    let dragons = this.dragonService.getDragons().filter(x => x.Type == AchievementType.Play);

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

    this.toastr.success('Доби ново змејче!', 'Браво!');

    let lastPassedLevel = Number(JSON.parse(this.cookieService.get('level-passed')));
    if (lastPassedLevel >= 2)
      return;

    this.cookieService.set('level-passed', '2', undefined, '/');
    debugger;

    this.showSuccess = true;
  }
  // #endregion
}
