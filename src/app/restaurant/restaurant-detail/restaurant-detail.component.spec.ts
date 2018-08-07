import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailComponent } from './restaurant-detail.component';

describe('RestaurantDetailComponent', () => {
  let component: RestaurantDetailComponent;
  let fixture: ComponentFixture<RestaurantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailComponent);
    component = fixture.componentInstance;
    component.listIndex = 0;
    component.restaurant = {
      'name': 'Lunchpakketdienst',
      'status': 'open',
      'sortingValues': {
        'bestMatch': 306.0,
        'newest': 259.0,
        'ratingAverage': 3.5,
        'distance': 14201,
        'popularity': 0.0,
        'averageProductPrice': 4465,
        'deliveryCosts': 500,
        'minCost': 5000
      }
    };
    component.twoLetters = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('higlighted stars should have a with of 70% because it has 3.5 stars', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.highlighted').style.width).toBe('70%');
  });
});
