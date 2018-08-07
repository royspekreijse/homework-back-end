import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RestaurantListComponent } from './restaurant-list.component';
import { RestaurantDetailComponent } from './../../restaurant/restaurant-detail/restaurant-detail.component';
import { SortButtonComponent } from '../sort-button/sort-button.component';
import { SearchRestaurantComponent } from '../search-restaurant/search-restaurant.component';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../../models/restaurant';
import { SampleService } from '../../service/sample.service';
import { sortingTitles } from '../../data/sorting-titles';

const MockedSampleService = {
  getSampleData(): Observable<Restaurant[]> {
    return of([
      {
        name: 'Tanoshii Sushi',
        status: 'open',
        sortingValues: {
          bestMatch: 0.0,
          newest: 96.0,
          ratingAverage: 4.5,
          distance: 1190,
          popularity: 17.0,
          averageProductPrice: 1536,
          deliveryCosts: 200,
          minCost: 1000
        }
      }, {
        name: 'Tandoori Express',
        status: 'closed',
        sortingValues: {
          bestMatch: 1.0,
          newest: 266.0,
          ratingAverage: 4.5,
          distance: 2308,
          popularity: 123.0,
          averageProductPrice: 1146,
          deliveryCosts: 150,
          minCost: 1300
        }
      }
    ]);
  },
  getSortingHeaders() {
    return of(sortingTitles);
  }
};

describe('RestaurantListComponent', () => {
  let component: RestaurantListComponent;
  let fixture: ComponentFixture<RestaurantListComponent>;
  let service: SampleService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RestaurantListComponent,
        RestaurantDetailComponent,
        SortButtonComponent,
        SearchRestaurantComponent
      ],
      providers: [
        {provide: SampleService, useValue: MockedSampleService }
      ],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    // service = new MockedSampleService();
    fixture = TestBed.createComponent(RestaurantListComponent);
    service = TestBed.get(SampleService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create 2 Restaurant Items', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.restaurant-detail').length).toBe(2);
  }));
});
