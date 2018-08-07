import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SortButtonComponent } from './sort-button.component';
import { Direction } from '../../models/direction';

describe('SortButtonComponent', () => {
  let component: SortButtonComponent;
  let fixture: ComponentFixture<SortButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortButtonComponent);
    component = fixture.componentInstance;
    component.sortOrder = Direction.UnSorted;
    component.title = 'De titel';
    component.property = 'prop';
    component.descending = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should only have class "down-arrow"', () => {
    component.descending = false;
    component.property = 'prop';
    fixture.detectChanges();
    const hasClassDownArrow = fixture.debugElement.query(By.css('.down-arrow'));
    const hasClassUpArrow = fixture.debugElement.query(By.css('.up-arrow'));
    expect(hasClassDownArrow).toBeTruthy();
    expect(hasClassUpArrow).toBeFalsy();
  });

  it('should only have class "up-arrow"', () => {
    component.descending = true;
    component.property = 'prop';
    fixture.detectChanges();
    const hasClassDownArrow = fixture.debugElement.query(By.css('.down-arrow'));
    const hasClassUpArrow = fixture.debugElement.query(By.css('.up-arrow'));
    expect(hasClassDownArrow).toBeFalsy();
    expect(hasClassUpArrow).toBeTruthy();
  });

});
