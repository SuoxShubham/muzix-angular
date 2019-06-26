import { Component, OnInit } from '@angular/core';
import { TrackService } from '../track.service';
import { WishlistService } from '../wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl:'./track.component.html' ,
  styleUrls:['./track.component.css']
  
})
export class TrackComponent implements OnInit {

  tracks:[];
  c:number=0;
  wishlistTracks:any=[];
  images:any=[];
  currnetTrack:any=[];
  constructor(private _trackService: TrackService,private router:Router, private _wishService: WishlistService) { }

  ngOnInit() {
    this._trackService.getTracks().subscribe(data=>{this.tracks = data.tracks.track;
      this.images=Object.values(data.tracks.track[0].image[1]);
      
      console.log(Object.values(data.tracks.track[0].image[1]))
    });
    // console.log(this.tracks);
  }
  onClick(track:any) {
    if(!this.wishlistTracks.includes(track) ){
    this.wishlistTracks.push(track);
    this.currnetTrack.push(track);
    this.c=1;
    }
    // console.log(this.wishlistTracks);
    if(this.c==1) {
      this._wishService.sendMessage(this.wishlistTracks).subscribe()
      this.c=0;
    }
  }

}
