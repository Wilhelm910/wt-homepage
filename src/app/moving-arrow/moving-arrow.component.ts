import { Component } from '@angular/core';

@Component({
  selector: 'app-moving-arrow',
  templateUrl: './moving-arrow.component.html',
  styleUrls: ['./moving-arrow.component.scss']
})
export class MovingArrowComponent {

  movedDiag = false;
  movedHead = false;
  hideDiag = false;

  hovered() {
    this.movedDiag = true;
    this.movedHead = true;
    setTimeout(() => {
      this.hideDiag = true;
    }, 500);
  }
}
