import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:DataService) { }

  ngOnInit() {
var observableresult=this.route.paramMap.subscribe((result)=>{

var  No=result.get("No");
var dbresult=this.service.Delete(No);
dbresult.subscribe((data)=>{
  this.router.navigate(['/home']);
})
})


  }

}
