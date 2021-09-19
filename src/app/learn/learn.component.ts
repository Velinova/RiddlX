import { Component, OnInit } from "@angular/core";
import { StreamState } from "../interfaces";
import { AudioService } from "../services/audio.service";
import { LetterService } from "../services/letter.service";
import { SoundsService } from "../services/sounds.service";

@Component({
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  word: string;
  letter: string;
  letters: any[];
  currentLetter: any;
  letterIndex: number;

  // #region Player

  state: StreamState;
  files: Array<any> = [];

  // #endregion Player

  constructor(
    private audioService: AudioService,
    private soundService: SoundsService,
    private letterService: LetterService
  ) {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false
    };
    this.word = '';
    this.letter = '';
    this.letters = [];
    this.letterIndex = 0;
  }

  ngOnInit(): void {
    this.letters = this.letterService.getLetters();
    this.setLetter();

    this.soundService.getFiles().subscribe(files => {
      this.files = files;
    });

    this.audioService.getState().subscribe(state => {
      this.state = state;
    })
  }

  next(): void {
    this.letterIndex++;
    this.setLetter();
  }

  previous(): void {
    this.letterIndex--;
    this.setLetter();
  }

  setLetter(): void {
    this.currentLetter = {
      Id: this.letters[this.letterIndex].Id,
      Letter: this.letters[this.letterIndex].Letter,
      Image: this.letterService.getLetterImage(this.letters[this.letterIndex].Letter)
    };

    this.word = `${this.currentLetter.Image[0].toUpperCase()}${this.currentLetter.Image.slice(1, this.currentLetter.Image.length).replace('.png', '')}`;
    this.letter = `${this.currentLetter.Image[0].toUpperCase()}${this.currentLetter.Image.slice(0, 1)}`;
  }

  listen(): void {
    let letterSound = this.files.filter((file) => { return file.text === this.currentLetter.Letter; })[0];
    this.audioService.playStream(letterSound.url).subscribe(() => { });
    
    setTimeout(() => {
      let wordSound = this.files.filter((file) => { return file.text[0].toLowerCase() === this.currentLetter.Letter.toLowerCase() && file.text.length > 1; })[0];
      this.audioService.playStream(wordSound.url).subscribe(() => { });
    }, 1000)
  }
}
