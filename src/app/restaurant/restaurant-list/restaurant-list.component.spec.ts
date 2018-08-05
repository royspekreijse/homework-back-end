import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantListComponent } from './restaurant-list.component';

import { SortButtonComponent } from '../sort-button/sort-button.component';
import { SearchRestaurantComponent } from '../search-restaurant/search-restaurant.component';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../../models/restaurant';

class MockedSampleService {
  getSampleData(): Observable<Restaurant[]> {
    return of([]);
  }
}

describe('RestaurantListComponent', () => {
  let component: RestaurantListComponent;
  let fixture: ComponentFixture<RestaurantListComponent>;
  let service: MockedSampleService;

  // const sampleService: SampleService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RestaurantListComponent,
        SortButtonComponent,
        SearchRestaurantComponent
      ],
      providers: [
        MockedSampleService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new MockedSampleService();
    fixture = TestBed.createComponent(RestaurantListComponent);
    const sampleService = TestBed.get(service);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data', () => {

  });
});
