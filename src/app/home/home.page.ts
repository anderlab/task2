import { Component } from '@angular/core';

import {Location} from '@angular/common';
import {Observable} from 'rxjs'; 
import { RestApiService } from '../rest-api.service';
import { AlertController} from '@ionic/angular';
import { NavController } from '@ionic/angular';

var a:any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  /*constructor(public api: RestApiService, private alertCtrl: AlertController, public navCtrl: NavController) {
    this.getItems();
    }

    @ViewChild('myNav') nav: NavController
    async presentAlert() {
      
      const alert = await this.alertCtrl.create({
        header: 'Prueba 1',
        //subHeader: 'Hola que ase',
        message: 'Hola que ase',
        buttons: [
          {
            text: 'Back',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Edit',
            handler: () => {
                // Let's navigate from TabsPage to Page1
                this.navCtrl.navigateRoot('edit');
            }
          }
        ]
      });
  
      await alert.present();
    }
    
    presentConfirm() {
      let alert = this.alertCtrl.create({
        message: 'Do you want to buy this book?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Buy',
            handler: () => {
              console.log('Buy clicked');
            }
          }
        ]
      });
      a.present();
    }
    
    presentPrompt() {
      let alert = this.alertCtrl.create({
        inputs: [
          {
            name: 'username',
            placeholder: 'Username'
          },
          {
            name: 'password',
            placeholder: 'Password',
            type: 'password'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Login',
            handler: data => {
              
            }
          }
        ]
      });
      a.present();
    }
  */
  items:any;
  results: Observable<any>;
  constructor(public api: RestApiService,private location: Location) {
    this.getItems();
  }
  
  async getItems() {
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
  ngOnInit() {
    this.getItems();
  }
  
}


