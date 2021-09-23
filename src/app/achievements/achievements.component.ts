import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { DragonService } from "../services/dragon.service";
import { AchievementType, Dragon } from "../services/types";

@Component({
  styleUrls: ['./achievements.component.scss'],
  templateUrl: './achievements.component.html'
})
export class AchievementsComponent {
  practiceDragons: Dragon[];
  playDragons: Dragon[];

  constructor(
    private dragonService: DragonService,
    private cookieService: CookieService
  ) {
    this.practiceDragons = this.dragonService.getDragons().filter((item) => { return item.Type == AchievementType.Practice });
    this.playDragons = this.dragonService.getDragons().filter((item) => { return item.Type == AchievementType.Play });
  }

  isDragonTaken(letter: string | undefined): boolean {
    if (this.cookieService.get('dragons') !== '') {
      let dragons = JSON.parse(this.cookieService.get('dragons'));
      return dragons.find((x: string) => { return x === letter; });
    }

    return false;
  }
}
