import { Component } from "@angular/core";

@Component({
  template: `<button mat-raised-button color="accent" class="btn-start d-block w-100 p-2 fs-5" routerLink="/welcome">
  <i class="fas fa-arrow-left mr-2"></i>&nbsp;Назад
</button>`,
  selector: 'back'
})
export class BackComponent {
  constructor() { }
}
