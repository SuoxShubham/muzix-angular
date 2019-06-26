import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { TrackComponent } from './track/track.component';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  {path:'', component:MainNavComponent},
  {path:'tracks', component:TrackComponent},
  
  {path:'wishlist', component:WishComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  


exports: [RouterModule]
})
export class AppRoutingModule { }
