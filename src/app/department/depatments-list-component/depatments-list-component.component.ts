import { Department } from 'src/app/Models/deprtment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-depatments-list-component',
  templateUrl: './depatments-list-component.component.html',
  styleUrls: ['./depatments-list-component.component.css']
})

export class DepatmentsListComponentComponent {
  detailsFlag=false;
  Department:Department[]=[
    new Department(1,"PD",50),
    new Department(2,"AI",15),
    new Department(3,"SA",25),
    new Department(4,"OS",40),
  ];
  dept=new Department();
  ShowDetails(id:number){
    for (let i = 0; i < this.Department.length; i++) {
      if(this.Department[i].id==id)
      {
        this.dept=this.Department[i];
        this.detailsFlag=true;
        break;
      }
    }
  }
  AddDepartment(d:Department){
    this.Department.push(d)
  }
  EditDepartment(d: Department)
  {
    for (let i = 0; i < this.Department.length; i++) {
      if(this.Department[i].id==d.id)
      {
        this.Department[i].Name = d.Name;
        this.Department[i].Capacity = d.Capacity;
        break;
      }
    }
  }
  DeleteDepartment(id:number)
  {
    for (let i = 0; i < this.Department.length; i++) {
      if(this.Department[i].id == id)
      {
        this.Department.splice(i,1)
        break;
      }
    }
  }
}