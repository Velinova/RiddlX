import { Component } from "@angular/core";
import { DragonService } from "../services/dragon.service";
import { AchievementType, Dragon } from "../services/types";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/firestore';

@Component({
  styleUrls: ['./achievements.component.scss'],
  templateUrl: './achievements.component.html'
})
export class AchievementsComponent {
  practiceDragons: Dragon[];
  playDragons: Dragon[];

  constructor(
    private dragonService: DragonService
  ) {
    this.practiceDragons = this.dragonService.getDragons().filter((item) => { return item.Type == AchievementType.Practice });
    this.playDragons = this.dragonService.getDragons().filter((item) => { return item.Type == AchievementType.Play });
  }
}
