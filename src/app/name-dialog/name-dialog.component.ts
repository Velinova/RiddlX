import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CookieService } from "ngx-cookie-service";
import { CommonService } from "../services/common.service";

@Component({
  selector: 'name-dialog',
  templateUrl: './name-dialog.component.html',
  styles: [`
    * { font-size: 32px; text-align: center; }
    div[mat-dialog-content] { overflow-y: hidden; }
  `]
})
export class NameDialogComponent {
  submitted: boolean;
  constructor(
    private commonService: CommonService,
    private cookieService: CookieService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NameDialogComponent>
  ) {
    this.submitted = false;
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onYesClick(): void {
    this.submitted = true;
    if (!this.data)
      return;

    let guid = this.commonService.getGuid();

    this.cookieService.set('user', guid);
    this.cookieService.set('name', this.data);

    this.dialogRef.close(this.data);
  }
}
