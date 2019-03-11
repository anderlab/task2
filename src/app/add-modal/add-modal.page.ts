import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.page.html',
  styleUrls: ['./add-modal.page.scss'],
})
export class AddModalPage implements OnInit {
  
  item=null;
  newItem: FormGroup;
  
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private activatedRoute: ActivatedRoute,
    public api: RestApiService, 
    public router: Router,
    private formBuilder: FormBuilder
    ) {  
      this.newItem = this.formBuilder.group({
        'name' : [null],
        'description' : [null],
        'date': [null],
      });}
      
      ngOnInit() {
        
      }
      async closeModal() {
        const onClosedData: string = "Wrapped Up!";
        await this.modalController.dismiss(onClosedData);
      }
      async addItem(){
        await this.api.addItem(this.newItem.value)
        .subscribe(res => {
          let id = res['id'];
          window.location.reload();
          // this.router.navigate(['/detail/'+id]);
          this.closeModal();
        }, (err) => {
          console.log(err);
        });
      }
      
    }
    