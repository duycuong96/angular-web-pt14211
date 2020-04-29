import { Component, OnInit } from '@angular/core';
import { Banner } from '../../../models/banner';
import { BannerService } from '../../../services/banner.service';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-banner-manager',
  templateUrl: './add-banner-manager.component.html',
  styleUrls: ['./add-banner-manager.component.scss']
})
export class AddBannerManagerComponent implements OnInit {
  banner: Banner = new Banner();
  constructor(
    private bannerService: BannerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addBanner(){
    this.bannerService.addBanner(this.banner).subscribe(
      data => this.router.navigateByUrl('admin/banner')
    )
  }

}
