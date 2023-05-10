import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/json/projects.json';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  slideIn = false;
  projectData: any = data.default;
 
  ngOnInit(): void {
   
  }

  hovered() {
    this.slideIn = true;
  }

  hoveredEnd() {
    this.slideIn = false;
  }

}

