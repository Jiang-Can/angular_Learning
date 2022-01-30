import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  humanInfo:any = {
    name:'',
    sex:'male',
    cities:['Melbourne','Sydney','Adelaide'],
    city:'Melbourne',
    hobbies:[
      {
        hobby:'ps5',
        checked:false
      },
      {
        hobby:'coding',
        checked:true
      },
      {
        hobby:'bunjee',
        checked:false
      },
    ],
    mark:''
  }
  ngOnInit(): void {
  }

  setCity(city:string) {
    console.log(city);
    this.humanInfo.city = city;
  }
}
