import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient)
   
{
 }
Select()
{
return this.http.get("http://localhost:7777/emps");
}
SelectByNo(No)
{
return this.http.get("http://localhost:7777/emps/"+No);
}
Insert(empobj)
{
return this.http.post("http://localhost:7777/emps",empobj);
}
Update(empobj)
{
return this.http.put("http://localhost:8888/emps/"+empobj.No,empobj);
}
Delete(No)
{
return this.http.delete("http://localhost:7777/emps/"+No);

}

// Select()
// {
// return this.http.get("http://localhost:8888/emps");

// }

// SelectByNo(No)
// {
// return this.http.get("http://localhost:8888/emps/"+No);

// }
// Insert(empobj)
// {
// return this.http.post("http://localhost:8888/emps",empobj);

// }
// Update(empobj)
// {
// return this.http.put("http://localhost:8888/emps/"+empobj.No,empobj);

// }
// Delete(No)
// {
// return this.http.delete("http://localhost:8888/emps/"+No);

// }

}
