import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './gameplay.component.html'
})
export class GameplayComponent {
  id: string;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params["id"];
  }
}
