import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
emp:any;
  constructor(private service:DataService) { }

  ngOnInit() {
    var observableresult=this.service.Select();
observableresult.subscribe((result)=>{
  console.log(result);
  
 this.emp=result; //
})
  }
}
