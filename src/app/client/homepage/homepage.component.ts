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

  slides:Banner[];


  constructor(
    private bannerService: BannerService,
    config: NgbCarouselConfig
    ) {
    config.interval = 10000;

  }

  ngOnInit(): void {
    this.getBanners();
    this.getSlides()
  }

  getBanners(){
    this.bannerService.getBannersHome().subscribe(
      data => {
        this.banners = data
      }
    )
  }

  getSlides(){
    this.bannerService.getSlide().subscribe(
      data => {
        this.slides = data
      }
    )
  }



}
