import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'rsp-search-restaurant',
  templateUrl: './search-restaurant.component.html',
  styleUrls: ['./search-restaurant.component.scss']
})
export class SearchRestaurantComponent implements OnInit {

  latestSearch$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  @Output() submitSearch: EventEmitter<string> = new EventEmitter();

  constructor() {
    // everytime the obseravble is changed emit the value it the eventemitter.
    this.latestSearch$.pipe(
      debounceTime(1000),
      ).subscribe((result: string) => {
        this.submitSearch.emit(result);
      });
  }
  newSearch(term) {
    // newSearch is activated bij keychange in the html
    this.latestSearch$.next(term);
  }
  ngOnInit() {

  }

}
