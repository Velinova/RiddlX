import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment';
import { AchievementsComponent } from './achievements/achievements.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackComponent } from './back.component';
import { LearnComponent } from './learn/learn.component';
import { MaterialModule } from './material.module';
import { NameDialogComponent } from './name-dialog/name-dialog.component';
import { GameplayComponent } from './play/gameplay/gameplay.component';
import { Level1Component } from './play/gameplay/level-1/level-1.component';
import { Level2Component } from './play/gameplay/level-2/level-2.component';
import { Level3Component } from './play/gameplay/level-3/level-3.component';
import { Level4Component } from './play/gameplay/level-4/level-4.component';
import { PlayComponent } from './play/play.component';
import { PracticeComponent } from './practice/practice.component';
import { CommonService } from './services/common.service';
import { LetterService } from './services/letter.service';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PracticeComponent,
    AchievementsComponent,
    LearnComponent,
    NameDialogComponent,
    BackComponent,
    PlayComponent,
    Level1Component,
    Level2Component,
    Level3Component,
    Level4Component,
    GameplayComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, "RiddlX"),
    ToastrModule.forRoot(), // ToastrModule added
  ],
  entryComponents: [],
  providers: [CommonService, CookieService, LetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
