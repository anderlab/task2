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
  
  async delete(itemId:string){
    // this.api.deleteItem(itemId);
    
    this.api.deleteItem(itemId)
    .subscribe(res => {
      this.router.navigate(['/home',()=>{
        location.reload();
      }])
      // this.router.navigate(['/home']);
    }, err => {
      console.log(err);
    });
  }
  
  
  
  
}
