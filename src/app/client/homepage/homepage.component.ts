import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  images = ['https://file.hstatic.net/1000230642/file/banner_hunter1__lp__f23ae981ad4c4098a6c6e2db3355bd32_master.jpg', 'http://skytheme.epizy.com/skytheme/images/slider/3.jpg', 'http://skytheme.epizy.com/skytheme/images/slider/3.jpg']
  constructor() { }

  ngOnInit(): void {
  }

}
