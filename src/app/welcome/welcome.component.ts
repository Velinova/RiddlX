import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CookieService } from "ngx-cookie-service";
import { NameDialogComponent } from "../name-dialog/name-dialog.component";
import { CommonService } from "../services/common.service";

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  name: string;
  firstRun: boolean;
  excercisePassed: boolean;

  constructor(
    public dialog: MatDialog,
    public cookieService: CookieService,
    public commonService: CommonService) {

    this.name = this.cookieService.get('name');
    this.excercisePassed = false;
    this.firstRun = typeof this.cookieService.get('user') == "undefined" || this.cookieService.get('user')?.length == 0;
  }

  openModal(): void {
    const dialogRef = this.dialog.open(NameDialogComponent, {
      width: '500px',
      data: this.name
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.length) {
        this.name = result;
        this.firstRun = false;
      }
    });
  }
}


