import { Injectable } from '@angular/core';



import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  
  apiUrl = 'http://localhost:3000';
  constructor(public http: HttpClient) { }
  
  getItems() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/items').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
    
    
  }
  
  