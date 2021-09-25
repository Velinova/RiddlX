import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { LearnComponent } from './learn/learn.component';
import { GameplayComponent } from './play/gameplay/gameplay.component';
import { PlayComponent } from './play/play.component';
import { PracticeComponent } from './practice/practice.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  {
    path: "welcome",
    component: WelcomeComponent
  },
  {
    path: "practice",
    component: PracticeComponent
  },
  {
    path: "achievements",
    component: AchievementsComponent
  },
  {
    path: "learn",
    component: LearnComponent
  },
  {
    path: "play",
    component: PlayComponent
  },
  {
    path: "play/:id",
    component: GameplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
