import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Banner } from '../../models/banner';
import { BannerService } from '../../services/banner.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  banners: Banner[];
  // images =  ['assets/images/anh1.jpg', 'assets/images/anh2.jpg', 'assets/images/anh3.jpg'];
  images = [700, 533, 807].map((n) => `https://picsum.photos/id/${n}/550/570`);


  constructor(
    private bannerService: BannerService,
    config: NgbCarouselConfig
    ) {
    config.interval = 10000;

  }

  ngOnInit(): void {
    this.getBanners();
  }

  getBanners(){
    this.bannerService.getBanners().subscribe(
      data => {
        this.banners = data
      }
    )
  }

}
