import { Component, Input } from '@angular/core';
import { Restaurant } from '../../models/restaurant';
import { SampleService } from '../../service/sample.service';

@Component({
  selector: 'rsp-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent {

  @Input() restaurant: Restaurant;
  @Input() listIndex: number;
  public twoLetters: string;
  constructor(private sampleService: SampleService) { }

  toggleFavorite(restaurant) {
    restaurant.isFavorite = !restaurant.isFavorite;
    this.sampleService.setFavorite(restaurant).subscribe();
  }
  getTwoLetters (): string {

    if (this.restaurant && this.restaurant.name) {
      // Split the array into words
      const makeWords = this.restaurant.name.split(' ');
      let firstLetter = '';
      let secondLetter = '';

      // Grab first letter of first word
      if (makeWords[0]) {
        firstLetter = makeWords[0].charAt(0);
      }
      // Grab first letter of second word
      if (makeWords[1]) {
        secondLetter = makeWords[1].charAt(0);
      }
      return `${firstLetter}${secondLetter}`;
    } else {
      return '';
    }
  }

}
