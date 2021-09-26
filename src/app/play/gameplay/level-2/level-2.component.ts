import { CdkDragDrop, copyArrayItem, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { StreamState } from "../../../interfaces";
import { AudioService } from "../../../services/audio.service";
import { SoundsService } from "../../../services/sounds.service";
import { LetterService } from "../../../services/letter.service";
import { LevelService } from "../../../services/level.service";

@Component({
  selector: 'level-2',
  templateUrl: './level-2.component.html',
  styleUrls: ['./level-2.component.scss']
})
export class Level2Component implements OnInit {
  user: string;
  imageSrc: string;
  current: any;
  imageLetters: any[];
  letters: any[];
  wordLetters: any[];
  words: string[];
  word: any[];

  // #region Player

  state: StreamState;
  files: Array<any> = [];

  // #endregion Player

  constructor(
    private audioService: AudioService,
    private soundService: SoundsService,
    private cookieService: CookieService,
    private letterService: LetterService,
    private levelService: LevelService,
  ) {
    this.user = '';
    this.words = [];
    this.word = [];
    this.letters = this.letterService.getLetters();
    this.words = this.levelService.getLevelTwoWords();

    this.imageLetters = this.letterService.getLetters();
    this.imageLetters.map((x) => { x.isShown = false });
    var random = Math.floor(Math.random() * this.imageLetters.length) + 1;
    var letter = this.letters.find((x) => { return x.Id === random; }).Letter;
    var imageUrl = this.letterService.getLetterImage(letter);
    this.current = this.letters[random];
    this.imageSrc = this.letterService.getLetterImage(letter);
    this.imageLetters.find((x) => { return x.Id === random; }).isShown = true;

    this.wordLetters = [];
    var wordCharArray = Array.from(this.words[random-1]);
    var vowels = ['']
    for(let i = 0; i < wordCharArray.length; i++ in wordCharArray){
      this.wordLetters.push({ Id: i, Letter: wordCharArray[i].toUpperCase(), IsVowel: this.isVowel(wordCharArray[i].toLowerCase()) });
    }
    this.wordLetters = this.shuffle(this.wordLetters);
    console.log(this.wordLetters);

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

  // end region

  isVowel(c: string) : boolean{
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

}
