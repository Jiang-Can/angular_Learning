import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  showService(){
    console.log("now storage server is on")
  }

  setData(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }

  getData(key:string){
    let value = localStorage.getItem(key);
    if(value==null)return null
    return JSON.parse(value);
  }

}
