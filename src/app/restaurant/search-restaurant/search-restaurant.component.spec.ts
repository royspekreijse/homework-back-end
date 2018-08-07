import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { SearchRestaurantComponent } from './search-restaurant.component';
import { By } from '@angular/platform-browser';

describe('SearchRestaurantComponent', () => {
  let component: SearchRestaurantComponent;
  let fixture: ComponentFixture<SearchRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should activate method  newSearch 2 times', async(async () => {
    spyOn(component, 'newSearch');
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('.rsp-search'));
    const inputElement = input.nativeElement;
    inputElement.value = 'hello';
    inputElement.dispatchEvent(new Event('keyup'));
    inputElement.value = 'world';
    inputElement.dispatchEvent(new Event('keyup'));
    expect(component.newSearch).toHaveBeenCalledTimes(2);

  }));

});
