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
      this.url = 'http://homework-backend.spekreijse.eu';
    }
  }
  getSortingHeaders(): Observable<any> {
    return of(sortingTitles);
  }

  getSampleData(): Observable<Restaurant[]> {
    return this.http.get(`${this.url}/api/restaurant`).pipe(
      map((response: any) => {
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

  setFavorite(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.patch(`${this.url}/api/sorting-value/id`, {
    }).pipe(
      map((response: any) => {
        return undefined;
    }));
  }
}

