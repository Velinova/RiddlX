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
    BackComponent
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
