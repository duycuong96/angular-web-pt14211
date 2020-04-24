import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  // images =  ['assets/images/anh1.jpg', 'assets/images/anh2.jpg', 'assets/images/anh3.jpg'];
  images = [700, 533, 807].map((n) => `https://picsum.photos/id/${n}/550/570`);
  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;

  }

  ngOnInit(): void {
  }

}
