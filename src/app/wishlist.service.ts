import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private _url : string="http://localhost:8080/api";
 receiveData:any=[];
  private _wishlistMessage = new BehaviorSubject<any>(this.receiveData);
  wishlist$ = this._wishlistMessage.asObservable();
  constructor(private http: HttpClient) { }

  
  getSongs(): Observable<any> {
    console.log(`${this._url}`+`/tracks/alltracks`)
    return this.http.get<any>(`${this._url}`+`/tracks/alltracks`);   
  }
  // createTrack(message: Object): Observable<Object> {
  //   return this.http.post(`${this._url}` + `/tracks`, message[0]);
  // }
  sendMessage(message: any): Observable<Object> {
    console.log(message[0].artist.name,' hey this is my message')
    return this.http.post(`${this._url}` + `/tracks`, {
      trackName: message[message.length-1].name,
      trackComments: message[message.length-1].artist.name
    });

    // wishClick(id: number): Observable<any> {
    //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    // }
    // this._wishlistMessage.next(message);
    // console.log(message[0].name,' this is message part');
    
  }
  wishClick(id:String): Observable<any> {
    return this.http.delete(`${this._url}`+`/tracks/${id}`, { responseType: 'text' });
  }
}
