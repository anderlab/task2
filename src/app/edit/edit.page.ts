import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  item=null;
  itemForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,public api: RestApiService,  public router: Router, private formBuilder: FormBuilder) {

    this.itemForm = this.formBuilder.group({
      'name' : [null],
      'description' : [null]
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
        this.router.navigate(['/detail', JSON.stringify(id)]);
      }, (err) => {
        console.log(err);
      });
  }

  
}
