import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent {
  movedDiag = false;
  movedHead = false;
  hideDiag = false;

  hovered() {
    this.movedDiag = true;
    this.movedHead = true;
    setTimeout(() => {
      this.hideDiag = true;
    }, 2000);
  }
}
