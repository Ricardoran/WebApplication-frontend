import { Component,Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent implements OnInit {

  @Input() data;
  p: number = 1;
  itemData;
  keyword;

  constructor() { }

  ngOnChanges() {
    this.formatData();
  }

  formatData() {
    this.itemData = this.data;
    if(this.itemData !== undefined) {
      this.keyword = this.data['keyword'];
      this.itemData = this.data['data'];
    }
  }

  ngOnInit(): void {
  }

}
