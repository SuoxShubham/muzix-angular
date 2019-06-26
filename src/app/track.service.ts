import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private _url : string= "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=india&api_key=909f591721ab9b452b2b6588ef33d671&format=json";
  constructor(private http: HttpClient) { }

  getTracks(): Observable<any> {
    return this.http.get<any>(this._url);
    
  }
}
