import { Component } from '@angular/core';

@Component({
  selector: 'app-moving-arrow-to-right',
  templateUrl: './moving-arrow-to-right.component.html',
  styleUrls: ['./moving-arrow-to-right.component.scss']
})
export class MovingArrowToRightComponent {

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
