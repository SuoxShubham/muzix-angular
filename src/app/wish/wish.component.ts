import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  private wishu:any=[];
  private img:any=[];
  constructor(private route:ActivatedRoute, private _wishService:WishlistService) { }

  ngOnInit() {
    // this._wishService.wishlist$
    // .subscribe(message =>{this.wishu=message;this.img=Object.values(message[0].image[2]);console.log('wishlist', message[0].image[2]);})
    this._wishService.getSongs().subscribe(data=>{this.wishu=data; console.log(data,' this is my new part')});
  }

  wishClick(track_id) {
   this._wishService.wishClick(track_id).subscribe(data=>{console.log(data);this.ngOnInit();});
  //  this._wishService.getSongs();
  }

}
