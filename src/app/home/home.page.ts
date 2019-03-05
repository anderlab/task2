import { Component } from '@angular/core';


import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public api: RestApiService) {
    this.getItems();
    }
  
  items:any;
  
  getItems() {
    this.api.getItems()
    .then(data => {
      this.items = data;
      console.log(this.items);
    });
  }
}
