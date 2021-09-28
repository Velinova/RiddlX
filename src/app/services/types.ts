export class Dragon {
  constructor(
    public Id?: number,
    public Name?: string,
    public Type?: AchievementType,
    public Letter?: string
  ) { }
}

export enum AchievementType {
  Practice = 1,
  Play = 2
}

export class UserModel {
  constructor(
    public id?: string,
    public name?: string,
    public playDragons?: Dragon[],
    public practiceDragons?: Dragon[]
  ) {
    this.playDragons = [];
    this.practiceDragons = [];
  }
}

export class Word {
  constructor(
    public id: number,
    public word: string
  ) { }

  firstLetter(): string {
    return this.word[0];
  }

  middlePart(): string {
    return this.word.substring(1, this.word.length - 1);
  }

  lastLetter(): string {
    return this.word[this.word.length - 1];
  }
}

export class Story {
  constructor(
    public id: number,
    public image: string,
    public description: string,
    public wrongWords: string[]
  ) {
  }
}


export class DescriptionWord {
  constructor(
    public id: number,
    public word: string,
    public isWrong: boolean,
    public isChecked: boolean,
    public isWronglySelected?: boolean
  ) {
    this.isWronglySelected = false;
  }

  equals(word: string): boolean {
    return this.word === word;
  }
}
