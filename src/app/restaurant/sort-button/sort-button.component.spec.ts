import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
});
