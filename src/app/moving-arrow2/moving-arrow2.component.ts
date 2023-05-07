import { Component } from '@angular/core';

@Component({
  selector: 'app-moving-arrow2',
  templateUrl: './moving-arrow2.component.html',
  styleUrls: ['./moving-arrow2.component.scss']
})
export class MovingArrow2Component {

 // movedDiag = false;
 // movedHead = false;
 // hideDiag = false;
  svgMoved = false;

  hovered() {
  //  this.movedDiag = true;
  //  this.movedHead = true;
    this.svgMoved = true;
    setTimeout(() => {
   //   this.hideDiag = true;
    }, 500);
  }

}
