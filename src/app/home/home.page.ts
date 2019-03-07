import { Component } from '@angular/core';

import {Location} from '@angular/common';
import {Observable} from 'rxjs'; 
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  results: Observable<any>;
  constructor(public api: RestApiService,private location: Location) {
    this.getItems();
  }
  
  getItems() {
    this.results=this.api.getItems();
  }
  
  async delete(itemId:string){
    // this.api.deleteItem(itemId);
    
    this.api.deleteItem(itemId)
    .subscribe(res => {
      this.location.go('/items');
    }, err => {
      console.log(err);
    });
  }
  
}
