import { Component } from '@angular/core';

import {Location} from '@angular/common';
import {Observable} from 'rxjs'; 
import { RestApiService } from '../rest-api.service';
import { AlertController} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AddModalPage } from '../add-modal/add-modal.page';
import { ActivatedRoute, Router } from '@angular/router';


var a:any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  items:any;
  results: Observable<any>;
  constructor(public api: RestApiService,
    private location: Location, 
    public modalController: ModalController,
    public router: Router,) {
      this.getItems();
    }
    
    async getItems() {
      this.results=this.api.getItems();
    }
    
    async delete(itemId:string){
      // this.api.deleteItem(itemId);
      
      this.api.deleteItem(itemId)
      .subscribe(res => {
        this.router.navigate(['/home']);
      }, err => {
        console.log(err);
      });
      location.reload();
    }
    
    
    ngOnInit() {
      this.getItems();
    }
    async openModal() {
      const modal = await this.modalController.create({
        component: AddModalPage,
      });
      modal.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null) {
          console.log('Modal Sent Data :', dataReturned);
        }
      });
      
      return await modal.present();
    }
    doRefresh(event) {
      this.getItems();
      console.log('Begin async operation');
      
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }
    
  }
  
  
  