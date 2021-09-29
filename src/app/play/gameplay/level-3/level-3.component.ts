import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { ToastrService } from "ngx-toastr";
import { AudioService } from "../../../services/audio.service";
import { DragonService } from "../../../services/dragon.service";
import { LevelService } from "../../../services/level.service";
import { SoundsService } from "../../../services/sounds.service";
import { AchievementType, DescriptionWord, Story } from "../../../services/types";

@Component({
  selector: 'level-3',
  templateUrl: './level-3.component.html',
  styleUrls: ['./level-3.component.scss']
})
export class Level3Component {
  counter: number;
  story: Story;
  stories: Story[];
  descriptionWords: DescriptionWord[];
  storyImage: string;

  files: any[];
  state: any;
  descriptionWordsArray: string[];
  checkedWordCounter: number;

  isCorrect: boolean;
  isWrong: boolean;
  hideNext: boolean;
  showSuccess: boolean;

  constructor(
    private audioService: AudioService,
    private levelService: LevelService,
    private soundService: SoundsService,
    private cookieService: CookieService,
    private dragonService: DragonService,
    private toastr: ToastrService
  ) {

    // #region Initialize component variables

    this.counter = 0;
    this.files = [];
    this.state = {};
    this.stories = this.levelService.getLevelThreeStories();
    this.story = this.stories[this.counter];
    this.storyImage = this.story.image;

    this.descriptionWords = [];
    this.descriptionWordsArray = [];
    this.checkedWordCounter = 0;
    this.initializeDescriptionWords();

    this.isWrong = false;
    this.isCorrect = false;
    this.hideNext = false;
    this.showSuccess = false;

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

    // #endregion
  }

  initializeDescriptionWords(): void {
    this.descriptionWordsArray = this.story.description.split(" ");
    for (let i = 0; i < this.descriptionWordsArray.length; i++) {
      let isWrong = this.story.wrongWords.filter((x) => {
        return x === this.descriptionWordsArray[i].replace(",", "").replace(".", "");
      }).length > 0;
      this.descriptionWords.push(new DescriptionWord(i, this.descriptionWordsArray[i], isWrong, false));
    }
  }

  listen(story: Story): void {
    console.log(story.image.substring(0, story.image.length - 4) + '.mp3');
    this.audioService.playStream('assets/sounds/stories/' + story.image.substring(0, story.image.length - 4) + '.mp3').subscribe(() => { });
  }

  findDescriptionWord(word: DescriptionWord): DescriptionWord | undefined {
    return this.descriptionWords.find((x) => x.equals(word.word));
  }

  checkIfWrong(word: DescriptionWord): void {
    let resultWord = this.findDescriptionWord(word);
    if (resultWord !== undefined) {
      resultWord.isWronglySelected = false;
      if (resultWord.isWrong && !resultWord.isChecked) {
        this.checkedWordCounter++;
      }

      resultWord.isChecked = true;
      if (!resultWord.isWrong)
        resultWord.isWronglySelected = true;

      setTimeout((resultWord: DescriptionWord) => {
        resultWord.isWronglySelected = false;
      }, 820, resultWord);
    }
    if (this.checkedWordCounter === 3) {
      this.isCorrect = true;
    }
  }

  showWrongWord(): void {
    let random;
    while (true) {
      random = Math.floor(Math.random() * this.descriptionWords.length);
      if (!this.descriptionWords[random].isChecked && this.descriptionWords[random].isWrong)
        break;
    }
    this.descriptionWords[random].isChecked = true;
    this.checkedWordCounter++;
    if (this.checkedWordCounter === 3) {
      this.isCorrect = true;
    }
  }

  // #region Options
  next(): void {

    //get dragon and add in cookie
    let dragons = this.dragonService.getDragons().filter(x => x.Type == AchievementType.Play);

    let randomDragon = Math.floor(Math.random() * dragons.length);

    let dragon = dragons[randomDragon];
    let dragonsCookie = [];

    if (this.cookieService.get('dragons') !== '') {
      dragonsCookie = JSON.parse(this.cookieService.get('dragons'));
      if (dragon) // in our case this will always be true, but we need to satisfy the typescript compiler
        dragonsCookie.push(dragon.Name);

      this.cookieService.set('dragons', JSON.stringify(dragonsCookie), undefined, '/');
    } else {
      if (dragon) // in our case this will always be true, but we need to satisfy the typescript compiler
        dragonsCookie.push(dragon.Name);

      this.cookieService.set('dragons', JSON.stringify(dragonsCookie), undefined, '/');
    }

    this.toastr.success('Пронајде ново змејче!', 'Браво!');

    //reinitialize
    this.counter++;
    this.story = this.stories[this.counter];
    this.storyImage = this.story.image;

    this.descriptionWords = [];
    this.descriptionWordsArray = [];
    this.checkedWordCounter = 0;
    this.initializeDescriptionWords();

    this.isWrong = false;
    this.isCorrect = false;
    this.hideNext = false;

    this.hideNext = (this.counter === 6);
  }

  finish(): void {

    //get dragon and add in cookie
    let dragons = this.dragonService.getDragons().filter(x => x.Type == AchievementType.Play);

    let randomDragon = Math.floor(Math.random() * dragons.length);

    let dragon = dragons[randomDragon];
    let dragonsCookie = [];

    if (this.cookieService.get('dragons') !== '') {
      dragonsCookie = JSON.parse(this.cookieService.get('dragons'));
      if (dragon) // in our case this will always be true, but we need to satisfy the typescript compiler
        dragonsCookie.push(dragon.Name);

      this.cookieService.set('dragons', JSON.stringify(dragonsCookie), undefined, '/');
    } else {
      if (dragon) // in our case this will always be true, but we need to satisfy the typescript compiler
        dragonsCookie.push(dragon.Name);

      this.cookieService.set('dragons', JSON.stringify(dragonsCookie), undefined, '/');
    }

    this.toastr.success('Пронајде ново змејче!', 'Браво!');

    this.showSuccess = true;

    let lastPassedLevel = Number(JSON.parse(this.cookieService.get('level-passed')));
    if (lastPassedLevel >= 3)
      return;

    this.cookieService.set('level-passed', '3', undefined, '/');
  }
  // #endregion
}
