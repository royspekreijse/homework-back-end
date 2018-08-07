import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, } from 'rxjs/operators';
import { sortingTitles } from '../data/sorting-titles';
import { Restaurant } from '../models/restaurant';


@Injectable({
  providedIn: 'root'
})
export class SampleService {
  private url: string;


  constructor(private http: HttpClient) {
    if (isDevMode()) {
      this.url = 'http://127.0.0.1:8000';
    } else {
      this.url = 'actual.backend.url';
    }
  }
  getSortingHeaders(): Observable<any> {
    return of(sortingTitles);
  }

  getSampleData(): Observable<Restaurant[]> {
    // ${this.url} '/assets/Sample.json'
    return this.http.get(`${this.url}/api/restaurant`).pipe(
      map((response: any) => {
        /*
        ONLY USED IN COMBINATION WITH SAMPLE DATA
        const retArray = response.restaurants.map((element: Restaurant) => {
          // tslint:disable-next-line:max-line-length
          element.sortingValues['topRestaurants'] = (( element.sortingValues.distance * element.sortingValues.popularity)
          + element.sortingValues.ratingAverage);
          return element;
        });
        */

        const retArray = [];
        response.forEach(element => {
          const item = {
            name: element.name,
            status: element.status,
            isFavorite: element.isFavorite,
            sortingValues: {
              bestMatch: element.bestMatch,
              newest: element.newest,
              ratingAverage: element.ratingAverage,
              distance: element.distance,
              popularity: element.popularity,
              averageProductPrice: element.averageProductPrice,
              deliveryCosts: element.deliveryCosts,
              minCost: element.minCost,
              topRestaurants : (( element.distance * element.popularity) + element.ratingAverage)
            }
          };
          retArray.push(item);
        });

        return retArray;
      }));
  }

  setFavorite(restaurant: Restaurant): Observable<any> {
    return this.http.post(`${this.url}/api/restaurant`, {
      name: restaurant.name,
      isFavorite: restaurant.isFavorite
    }).pipe(
      map((response: any) => {
        console.log(response);
    }));
  }
}

