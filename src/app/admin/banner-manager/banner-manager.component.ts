import { Component, OnInit } from '@angular/core';

import { Banner } from '../../models/banner';
import { BannerService } from '../../services/banner.service';

@Component({
  selector: 'app-banner-manager',
  templateUrl: './banner-manager.component.html',
  styleUrls: ['./banner-manager.component.scss']
})
export class BannerManagerComponent implements OnInit {

  banners: Banner[];
  page = 1;
  pageSize = 10;

  constructor(
    private bannerService: BannerService
  ) { }

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

  removeBanner(id){
    this.bannerService.removeBanner(id).subscribe(
      data => {
        this.banners = this.banners.filter(
          banner => banner.id != data.id
        );
      }
    )
  }

}
