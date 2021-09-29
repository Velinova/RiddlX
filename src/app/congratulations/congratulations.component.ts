import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'congratulations',
  styleUrls: ['./congratulations.component.scss'],
  templateUrl: './congratulations.component.html'
})
export class CongratulationsComponent {
  user: string;
  isFinalLevel: boolean;
  constructor(
    private route: ActivatedRoute,
    private cookieService: CookieService
  ) {
    this.user = '';
    this.isFinalLevel = false;
    this.route.params.subscribe((params) => {
      this.isFinalLevel = params["id"] === "3";
    });

    this.user = this.cookieService.get('name');
  }
}
