export class Dragon {
  constructor(
    public Id?: number,
    public Name?: string,
    public Type?: AchievementType
  ) { }
}

export enum AchievementType {
  Practice = 1,
  Play = 2
}
