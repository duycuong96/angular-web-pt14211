import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Banner } from "../models/banner";
import { Observable } from 'rxjs';

@Injectable()

export class BannerService {

  bannersApi = 'http://localhost:3000/banner';

  constructor(
    private http: HttpClient
  ){}

  getBanners(): Observable<Banner[]>{
    return this.http.get<Banner[]>(this.bannersApi)
  }

  getBanner(id): Observable<Banner>{
    return this.http.get<Banner>(`${this.bannersApi}/${id}`);
  }

  removeBanner(id): Observable<Banner>{
    return this.http.delete<Banner>(`${this.bannersApi}/${id}`);
  }


  addBanner(banner): Observable<Banner>{
    return this.http.post<Banner>(`${this.bannersApi}`, banner);
  }

  updateBanner(banner): Observable<Banner>{
    return this.http.put<Banner>(`${this.bannersApi}/${banner.id}`, banner)
  }




}
