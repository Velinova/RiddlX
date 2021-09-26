import { CdkDragDrop, copyArrayItem, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { StreamState } from "../../../interfaces";
import { AudioService } from "../../../services/audio.service";
import { LetterService } from "../../../services/letter.service";
import { LevelService } from "../../../services/level.service";
import { SoundsService } from "../../../services/sounds.service";
import { Word } from "../../../services/types";

@Component({
  selector: 'level-1',
  templateUrl: './level-1.component.html',
  styleUrls: ['./level-1.component.scss']
})
export class Level1Component implements OnInit {
  user: string;
  isWrong: any;
  words: Word[];
  isCorrect: any;
  letters: any[];
  counter: number;
  lastLetter: any[];
  firstLetter: any[];
  activeHint: boolean;
  showSuccess: boolean;
  isDisabledRemoval: boolean;

  // #region Player

  state: StreamState;
  files: Array<any> = [];

  // #endregion Player

  constructor(
    private audioService: AudioService,
    private levelService: LevelService,
    private soundService: SoundsService,
    private cookieService: CookieService,
    private letterService: LetterService
  ) {
    this.user = '';
    this.words = [];
    this.counter = 0;
    this.letters = [];
    this.lastLetter = [];
    this.firstLetter = [];
    this.activeHint = false;
    this.showSuccess = false;
    this.isDisabledRemoval = false;
    this.isWrong = { first: null, last: null };
    this.isCorrect = { first: null, last: null };

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
    this.letters = this.sortBy('Id');
    this.letters.map((x) => { x.isDisabled = false; });
  }

  ngOnInit(): void {
    this.user = this.cookieService.get('name');
    this.words = this.levelService.getLevelOneWords();
  }

  dropFirst(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (this.firstLetter.length > 0)
        return;
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

      let letter = this.letters.find((x) => { return x.Id === Number(event.item.element.nativeElement.id) }).Letter;
      let word = this.words[this.counter];

      if (word.firstLetter().toLowerCase() !== letter.toLowerCase())
        this.isWrong.first = true;
      else
        this.isCorrect.first = true;
    }
  }

  dropLast(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (this.lastLetter.length > 0)
        return;
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

      let letter = this.letters.find((x) => { return x.Id === Number(event.item.element.nativeElement.id) }).Letter;
      let word = this.words[this.counter];

      if (word.lastLetter().toLowerCase() !== letter.toLowerCase())
        this.isWrong.last = true;
      else
        this.isCorrect.last = true;
    }
  }

  listenLetter(letter: string): void {
    let letterSound = this.files.find((x) => { return x.isLetter && x.text.toLowerCase() === letter.toLowerCase() });
    this.audioService.playStream(letterSound.url).subscribe(() => { });
  }

  listenWord(word: string): void{
    let wordSound = this.files.find((x) => { return !x.isLetter && x.text.toLowerCase() === word.toLowerCase() });
    this.audioService.playStream(wordSound.url).subscribe(() => { });
  }

  noReturnPredicate(): boolean { return false; }

  sortBy(prop: string): any[] {
    return this.letters.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  nextWord(): void {
    this.counter++;

    this.lastLetter = [];
    this.firstLetter = [];
    this.activeHint = false;
    this.isDisabledRemoval = false;
    this.isWrong = { first: false, last: false };
    this.isCorrect = { first: false, last: false };
    this.letters.map((x) => { x.isDisabled = false; });
  }

  removeLetter(type: 'first' | 'last'): void {
    if (type == 'first') {
      this.firstLetter = [];
      this.isCorrect.first = false;
      this.isWrong.first = false;
    }
    if (type == 'last') {
      this.lastLetter = [];
      this.isCorrect.last = false;
      this.isWrong.last = false;
    }
  }

  levelPassed(): void {
    var lastPassedLevel = Number(JSON.parse(this.cookieService.get('level-passed')));
    if (lastPassedLevel >= 1)
      return;

    this.cookieService.set('level-passed', '1', undefined, '/');
  }

  // #region Hints

  removeUnused(): void {
    let word = this.words[this.counter];
    let nonDisabledLetters = this.letters.filter((x) => { return !x.isDisabled });
    nonDisabledLetters = nonDisabledLetters.filter((x) => { return x.Letter.toLowerCase() !== word.firstLetter().toLowerCase() && x.Letter.toLowerCase() !== word.lastLetter().toLowerCase() });

    if (nonDisabledLetters.length > 5) {
      let uniqueNumbers: any[] = [];
      while (uniqueNumbers.length < 5) {
        var r = Math.floor(Math.random() * nonDisabledLetters.length);
        if (uniqueNumbers.indexOf(r) === -1) uniqueNumbers.push(r);
      }

      for (let i = 0; i < 5; i++) {
        let y = nonDisabledLetters[uniqueNumbers[i]]
        this.letters.find((x) => { return x.Id === y.Id; }).isDisabled = true;
      }
    } else {
      for (let i = 0; i < nonDisabledLetters.length; i++) {
        let y = nonDisabledLetters[i]
        this.letters.find((x) => { return x.Id === y.Id; }).isDisabled = true;
      }

      this.isDisabledRemoval = true;
    }
  }

  checkIsVowel(letter: string): boolean {
    return ['а', 'е', 'и', 'о', 'у'].indexOf(letter.toLowerCase()) !== -1;
  }

  showVowelConsonant(): void {
    this.activeHint = true;
  }

  //#endregion Hints
}
