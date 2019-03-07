import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  item=null;
  
  constructor(private activatedRoute: ActivatedRoute,public api: RestApiService,  public router: Router) { }
  
  ngOnInit() {
    this.getItem();
  }
  
  getItem(){
    let id= this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getItemById(id).subscribe(result=>{
      console.log('details: ',result);
      this.item=result;
    })
  }
  
  deleteItem(id:string) {
      this.api.deleteItem(id);
    }
  
  // delete(id){
  //   this.api.deleteItem(id)
  //   .subscribe(res => {
  //     this.router.navigate([ '/tabs', { outlets: { home: 'home' } } ]);
  //   }, err => {
  //     console.log(err);
  
  //   });
  // };
  
  
  
  
}
