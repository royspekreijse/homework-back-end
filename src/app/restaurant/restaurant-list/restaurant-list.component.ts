import { Component } from '@angular/core';
import { SampleService } from '../../service/sample.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurant } from '../../models/restaurant';
import { SortingTitle } from '../../models/sorting-title';

@Component({
  selector: 'rsp-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})

export class RestaurantListComponent {
  public sortingTitles$: Observable<SortingTitle[]>;
  public sortDescending: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public restaurantList: Restaurant[] = [];
  public restaurantList$: BehaviorSubject<Restaurant[]> = new BehaviorSubject([]);
  public currentSortProperty: BehaviorSubject<string> = new BehaviorSubject('bestMatch');
  public filterString: BehaviorSubject<string> = new BehaviorSubject('');
  public filterChange: BehaviorSubject<any> = new BehaviorSubject({
      name: 'bestMatch',
      descending: false
  });

  constructor(private sampleService: SampleService) {

    // Get the data, store it in raw data in a list create an behavioursubject for the data shown.
    this.sampleService.getSampleData().subscribe((data) => {
      this.restaurantList = data;
      this.restaurantList$.next(this.sortRestaurants(this.restaurantList));
    });

    // Get the list of sorting headers
    this.sortingTitles$ = this.sampleService.getSortingHeaders();

    // When the sorting is changed update the list on the screen.
    this.currentSortProperty.subscribe(() => {
      this.restaurantList$.next(this.sortRestaurants(this.restaurantList$.getValue()));
    });
  }


  public changeSortOrder(newSort) {
    if (this.currentSortProperty.getValue() === newSort) {
      this.sortDescending.next(!this.sortDescending.getValue());
    }
    this.currentSortProperty.next(newSort);
  }

  private sortRestaurants(arrayToSort: Restaurant[]): Restaurant[] {
    const arrayCopy = arrayToSort.slice(0);
    return arrayCopy.sort((restaurant1, restaurant2) => {
      const sortProperty = this.currentSortProperty.getValue();
      const sortValue1 = restaurant1.sortingValues[sortProperty];
      const sortValue2 = restaurant2.sortingValues[sortProperty];

      // first sort if favorite
      const compareFavorite = this.compareOnFavorite(restaurant1, restaurant2);
      if (compareFavorite !== 0 ) { return compareFavorite; }
      // Favorite is the same now compare the rest

      // second sort on opening
      const compareOpen = this.compareOnOpen(restaurant1, restaurant2);

      // after favorite and opening sort on key
      if (compareOpen !== 0) { return compareOpen; }
      // Opening is the same now compare the key property
        if (this.sortDescending.getValue()) {
          return sortValue2 - sortValue1;
        } else {
          return sortValue1 - sortValue2;
        }
    });
  }

  compareOnOpen(restaurant1: Restaurant, restaurant2: Restaurant) {
    const statuses = ['open', 'order ahead', 'closed'];
    return statuses.indexOf(restaurant1.status) - statuses.indexOf(restaurant2.status);
  }
  compareOnFavorite(restaurant1: Restaurant, restaurant2: Restaurant) {
    // favorites are compared, undefined will be converted to false
    const isFavorite1 = restaurant1.isFavorite ? true : false;
    const isFavorite2 = restaurant2.isFavorite ? true : false;
    return (isFavorite1 === isFavorite2) ? 0 : isFavorite1 ? -1 : 1;
  }


  public updateFilter(term: string) {
    const arrayCopy = this.sortRestaurants(this.restaurantList);
    const filteredArray = arrayCopy
    .filter((item) => {
        if (term) {
          return item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1;
        } else {
          return true;
      }
});
    this.restaurantList$.next(filteredArray);
  }
}
