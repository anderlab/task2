import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  item=null;
  itemForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
    public api: RestApiService,
    public router: Router,
    private formBuilder: FormBuilder,
    public alertController: AlertController) {

    this.itemForm = this.formBuilder.group({
      'name' : [null],
      'description' : [null],
      'date':[null],
    });
   }

  ngOnInit() {
    this.getItem();
  }
  getItem(){
    let id= this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getItemById(id).subscribe(result=>{
      this.item=result;
    })
  }

  async updateItem(){
    await this.api.updateItem(this.activatedRoute.snapshot.paramMap.get('id'), this.itemForm.value)
    .subscribe(res => {
        let id = res['id'];
        this.presentAlert();
       // window.location.reload();
        //this.router.navigate(['/home']);
      }, (err) => {
        console.log(err);
      });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Changes succesfully saved',
      buttons: ['OK']
    });

    await alert.present();
    await window.location.reload();
  }

  
}
