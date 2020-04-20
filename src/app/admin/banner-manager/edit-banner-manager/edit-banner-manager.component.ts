import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BannerService } from '../../../services/banner.service';
import { Banner } from '../../../models/banner';

@Component({
  selector: 'app-edit-banner-manager',
  templateUrl: './edit-banner-manager.component.html',
  styleUrls: ['./edit-banner-manager.component.scss']
})
export class EditBannerManagerComponent implements OnInit {

  banner: Banner;

  constructor(
    private bannerService: BannerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getBanner();
  }

  getBanner(){
    this.route.params.subscribe(
      param => {
        this.bannerService.getBanner(param.bannerId).subscribe(
          data => {
            this.banner = data;
          }
        )
      }
    )
  }

  updateBanner(){
    this.bannerService.updateBanner(this.banner).subscribe(
      data => {
        this.router.navigateByUrl('admin/banner');
      }
    )
  }

}
