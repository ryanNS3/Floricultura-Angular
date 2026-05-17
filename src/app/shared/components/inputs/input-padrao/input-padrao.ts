import { Component } from "@angular/core";

@Component({
  selector: "app-input-padrao",
  imports: [],
  templateUrl: "./input-padrao.html",
  styleUrl: "./input-padrao.css",
  
})
export class InputPadrao {
  isClicked = false;

onClick() {
  this.isClicked = true;
}
}