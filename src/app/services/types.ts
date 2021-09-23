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
