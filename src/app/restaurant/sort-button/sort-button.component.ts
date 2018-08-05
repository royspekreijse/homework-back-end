import { Component, OnInit, Input } from '@angular/core';
import { Direction } from '../../models/direction';

@Component({
  selector: 'rsp-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss']
})
export class SortButtonComponent implements OnInit {
  @Input() sortOrder: Direction;
  @Input() title: string;
  @Input() property: string;
  @Input() descending: boolean;
  constructor() { }

  ngOnInit() {
  }

}
