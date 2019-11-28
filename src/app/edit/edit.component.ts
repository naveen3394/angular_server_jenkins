import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
emp={"No":"","Name":"","Age":""};
  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:DataService)
     { }

  ngOnInit() 
  {
this.route.paramMap.subscribe((result)=>{
  var No=result.get("No");
var observableresult=  this.service.SelectByNo(No);
observableresult.subscribe((data)=>{
  this.emp=data[0];
})
  })
}

Update()
{
var observableresult=this.service.Update(this.emp);
observableresult.subscribe((result)=>{
  this.router.navigate(['/home']);
})
}



}
