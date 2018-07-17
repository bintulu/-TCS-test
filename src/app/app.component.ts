import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

export class Restaurant {
  name: string;
  cuisineTypes: {};
  ratingForDisplay: string;

  constructor(restaurant: Restaurant){
  }
}

@Component({
  selector: 'restaurants',
  templateUrl: './app.component.html'
})
export class AppComponent {
  restaurants : Observable<Restaurant[]>

  get Restaurants(){
    return this.restaurants;
  }

  constructor(public appService: AppService) {
   }

   getRestaurants(outcode) {
    try {
      this.restaurants = this.appService.getByOutcode(outcode);
      this.restaurants.forEach(r => console.log(r));
    } catch (e) {
      console.log(e);
    }
  }
}

