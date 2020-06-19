import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-tab',
  templateUrl: './card-tab.component.html',
  styleUrls: ['./card-tab.component.css']
})
export class CardTabComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
