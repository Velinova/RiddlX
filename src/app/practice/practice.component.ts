import { Component } from "@angular/core";
import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { LetterService } from "../services/letter.service";

@Component({
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {
  letters: any[];
  answers: any[];
  imageSrc: string;
  isWrong: boolean;
  hideNext: boolean;
  isCorrect: boolean;
  imageLetters: any[];
  constructor(private letterService: LetterService) {
    this.answers = [];
    this.imageSrc = '';
    this.isWrong = false;
    this.hideNext = false;
    this.isCorrect = false;

    this.letters = this.letterService.getLetters();
    this.imageLetters = this.letterService.getLetters();
    this.imageLetters.map((x) => { x.isShown = false });
    var random = Math.floor(Math.random() * this.imageLetters.length) + 1;
    var letter = this.letters.find((x) => { return x.Id === random; }).Letter;
    this.imageSrc = this.letterService.getLetterImage(letter);
  }

  drop(event: CdkDragDrop<any[]>): void {
    this.isWrong = false;
    this.isCorrect = false;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      //this.imageLetters.find((x) => { return x.Id === random; }).isShown = false;
    } else {
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

      let letter = this.letters.find((x) => { return x.Id === Number(event.item.element.nativeElement.id) }).Letter;
      if (this.imageSrc[0].toLowerCase() !== letter.toLowerCase())
        this.isWrong = true;
      else
        this.isCorrect = true;
      //this.imageLetters.find((x) => { return x.Id === random; }).isShown = true;
    }
  }

  next(): void {
    while (true) {
      var random = Math.floor(Math.random() * this.imageLetters.length) + 1;
      if (this.imageLetters.find((x) => { return x.Id === random; }).isShown)
        continue;

      var letter = this.letters.find((x) => { return x.Id === random; }).Letter;

      this.imageSrc = this.letterService.getLetterImage(letter);

      this.hideNext = this.imageLetters.filter((x) => { return x.isShown; }).length === this.imageLetters.length;
      break;
    }
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
}
