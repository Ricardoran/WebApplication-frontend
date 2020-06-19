import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  backend_url = 'https://hw8-backend-v2.wl.r.appspot.com';
  // backend_url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  // combine the form data into a url and send it to backend server

  buildUrl(form){
    let url = this.backend_url;

    url = url + '?input_keyword=' + form.keyword;

    if (form.priceMin !== '') {
      url = url + '&input_min=' + form.priceMin;
    }
    if (form.priceMax !== '') {
      url = url + '&input_max=' + form.priceMax;
    }
    if (form.sellerArray.length !== 0) {
      url = url + '&seller=' + form.sellerArray[0];
    }
    if (form.shippingArray.length !== 0) {
      for (let i = 0; i < form.shippingArray.length; i++) {
        url = url + '&free_shipping=' + form.shippingArray[i];
      }
    }
    if (form.conditionArray.length !== 0) {
      for (let i = 0; i < form.conditionArray.length; i++) {
        url = url + '&condition=' + form.conditionArray[i];
      }
    }

    url = url + '&input_sort_order=' + form.sorter;
    console.log('url is ');
    console.log(url);
    return url;
  }
}
