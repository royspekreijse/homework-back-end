import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantListComponent } from './restaurant-list.component';
import { RestaurantDetailComponent } from './../../restaurant/restaurant-detail/restaurant-detail.component';
import { SortButtonComponent } from '../sort-button/sort-button.component';
import { SearchRestaurantComponent } from '../search-restaurant/search-restaurant.component';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../../models/restaurant';
import { SampleService } from '../../service/sample.service';
import { sortingTitles } from '../../data/sorting-titles';
import { HttpClientModule, HttpClient } from '../../../../node_modules/@angular/common/http';


class MockedSampleService {
  constructor() { }

  getSampleData(): Observable<Restaurant[]> {
    return of([{
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
        }}]);
  }
  getSortingHeaders() {
    return of(sortingTitles);
  }
}

describe('RestaurantListComponent', () => {
  let component: RestaurantListComponent;
  let fixture: ComponentFixture<RestaurantListComponent>;
  let service: MockedSampleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RestaurantListComponent,
        RestaurantDetailComponent,
        SortButtonComponent,
        SearchRestaurantComponent
      ],
      providers: [
        {
          provide: SampleService,
          useValue: new MockedSampleService
        }
      ],
      imports:[HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new MockedSampleService();
    fixture = TestBed.createComponent(RestaurantListComponent);
    TestBed.get(service);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
