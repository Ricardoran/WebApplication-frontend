import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  @Input() item;
  itemData = [];
  public mode:string ="Show Details";
  cool = "beforeExpand";
  expandOrNot = false;

  toggleDetails(){
    if(this.mode == "Show Details"){
      this.mode = "Hide Details";
      this.expandOrNot = true;
      this.cool = "afterExpand";
    }else{
      this.mode = "Show Details";
      this.expandOrNot = false;

      this.cool = "beforeExpand";

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.itemData = this.item;
  }

}
