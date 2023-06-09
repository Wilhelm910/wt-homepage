import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  animateMenuRev = false;
  animateMenu = false;
  moveNavOut = false;
  showMenu = false;
  icons = ['transition1.svg', 'transition2.svg', 'transition3.svg', 'x.svg']
  currentIcon = ''


  openMenu() {
    this.animateMenu = true;
    this.animateMenuRev = false;
    setTimeout(() => {
      this.showMenu = true;
    }, 400);

    this.moveNavOut = false;
    //this.animate()
    //this.showMenu = true;
  }

  closeMenu() {
    this.animateMenuRev = true;
    this.animateMenu = false;

    this.moveNavOut = true;
   // this.animateReverse()
    setTimeout(() => {
      this.showMenu = false;
    }, 400);

  }


  sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  animate = async () => {
    for (let i = 0; i < this.icons.length; i++) {
      await this.sleep(100)
      this.currentIcon = this.icons[i]
    }
  }

  animateReverse = async () => {
    for (let i = this.icons.length - 2; i >= 0; i--) {
      await this.sleep(100)
      this.currentIcon = this.icons[i]
    }
  }




}
