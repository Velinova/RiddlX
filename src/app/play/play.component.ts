import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Component({
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  isPracticePassed: boolean;
  lastPassedLevel: number;

  constructor(
    private cookieService: CookieService
  ) {
    this.isPracticePassed = false;
    this.lastPassedLevel = 0;
  }

  ngOnInit(): void {
    this.lastPassedLevel = Number(JSON.parse(this.cookieService.get('level-passed')));
  }
}
