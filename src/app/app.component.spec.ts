import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { SearchRestaurantComponent } from './restaurant/search-restaurant/search-restaurant.component';
import { SortButtonComponent } from './restaurant/sort-button/sort-button.component';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { SampleService } from './service/sample.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RestaurantListComponent,
        RestaurantDetailComponent,
        SearchRestaurantComponent,
        SortButtonComponent
      ],
      providers: [],
      imports: [
        BrowserModule,
        HttpClientModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Sample Restaurant list'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Sample Restaurant list');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Sample Restaurant list');
  }));
});
