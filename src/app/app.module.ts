import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { SortButtonComponent } from './restaurant/sort-button/sort-button.component';
import { SearchRestaurantComponent } from './restaurant/search-restaurant/search-restaurant.component';
import { SampleService } from './service/sample.service';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantDetailComponent,
    SortButtonComponent,
    SearchRestaurantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
