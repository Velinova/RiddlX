import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';
import { AchievementsComponent } from './achievements/achievements.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NameDialogComponent } from './name-dialog/name-dialog.component';
import { PracticeComponent } from './practice/practice.component';
import { CommonService } from './services/common.service';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PracticeComponent,
    AchievementsComponent,
    NameDialogComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, "RiddleX")
  ],
  entryComponents: [],
  providers: [CommonService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
