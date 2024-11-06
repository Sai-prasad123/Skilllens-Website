import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getData(url: string) {
    return this._http.get(url);
  }
  postData(url: string, obj: any) {
    return this._http.post(url, obj);
  }
}
