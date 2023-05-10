import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/json/projects.json';
import AOS from "aos";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  slideIn = false;
  projectData: any = data.default;
 
  ngOnInit(): void {
    AOS.init();
  }

  hovered() {
    this.slideIn = true;
  }

  hoveredEnd() {
    this.slideIn = false;
  }

}

