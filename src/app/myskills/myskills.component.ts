import { Component } from '@angular/core';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent {

  icons = ['angular.svg','typescript.svg','javascript.svg','html.svg','firebase.svg','git.svg','css.svg','restapi.svg','scrum.svg','materialdesign.svg']
  icon_description = ['Angular', 'Typescript','Javascript','HTML','Firebase','GIT','CSS','Rest-API','Scrum','Material design',]

  color = false;
  moving = false;

  hovered() {
    this.color = true;
    this.moving = true;
  }

  hoveredEnds() {
    this.color = false;
    this.moving = false;
  }
}
