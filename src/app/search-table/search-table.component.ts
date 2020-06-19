import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CommunicationService} from '../communication.service';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css']
})
export class SearchTableComponent implements OnInit {

  itemForm;
  itemData;

  conditions: Array<any> = [
    { name: 'New', value: '1000' },
    { name: 'Used', value: '3000' },
    { name: 'Very good', value: '4000' },
    { name: 'Good', value: '5000' },
    { name: 'Accpetable', value: '6000' }
  ];

  shippings: Array<any> = [
    { name: 'Free', value: 'free' },
    { name: 'Expedited', value: 'expedited' }
  ];

  sellers: Array<any> = [
    { name: 'Return Accepted', value: 'returnOrNot' }
  ];

  keywordValidate = true;
  priceValidate = true;
  hasResult = true;
  originalPic = true;

  constructor(
    private formBuilder: FormBuilder,
    private communicationService: CommunicationService,
    private http: HttpClient
  ) {
    this.itemForm = this.createItemForm();
  }

  createItemForm = () => {
    return this.formBuilder.group({
      keyword: '',
      priceMin: '',
      priceMax: '',
      conditionArray: this.formBuilder.array([]),
      shippingArray: this.formBuilder.array([]),
      sellerArray: this.formBuilder.array([]),
      sorter: ['BestMatch']
    });
  }

  onCheckBoxChange(e, name) {
    const checkArray: FormArray = this.itemForm.get(name) as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  isNumber(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
  }

  validateForm(data) {
    if (data.keyword === ''|| data.keyword === null) {
      this.keywordValidate = false;
    }
    if (((data.priceMin !== '') && (data.priceMin!==null)) && ((!this.isNumber(data.priceMin) || data.priceMin < 0))) {
      this.priceValidate = false;
    }
    if (((data.priceMax !== '') && (data.priceMax!==null))  && ((!this.isNumber(data.priceMax) || data.priceMax < 0))) {
      this.priceValidate = false;
    }
    if ( this.isNumber(data.priceMin) && this.isNumber(data.priceMax)) {
      if (data.priceMin > data.priceMax) {
        this.priceValidate = false;
      }
    }
  }

  search(form) {
    this.keywordValidate = true;
    this.priceValidate = true;
    this.hasResult = true;
    this.originalPic = true;
    const url = this.communicationService.buildUrl(form);
    console.log(url);
    const _this = this;
    this.http.get(url).subscribe(
      data => {
        _this.itemData = data;
        console.log(this.itemData);
        if (_this.itemData['itemCount'] == 0) {
          _this.hasResult = false;
          _this.originalPic= true;
          console.log(_this.hasResult);
        }else{
          _this.originalPic= false;
        }
      }
    );
  }

  onSubmit(form) {
    // Process checkout data here
    // tslint:disable-next-line:variable-name
    this.keywordValidate=true;
    this.priceValidate = true;
    this.hasResult = true;
    const _this = this;
    this.validateForm(form);
    if (this.keywordValidate && this.priceValidate) {
      console.log('searching function running');
      this.search(form);
    }
  }

  reset = () => {
    this.keywordValidate = true;
    this.priceValidate = true;
    this.hasResult = true;
    this.originalPic = true;
    this.itemForm = this.createItemForm();
  }

  ngOnInit(): void {
  }

}
