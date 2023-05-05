import { Component, EventEmitter, Output } from '@angular/core';
import { Department } from 'src/app/Models/deprtment';

@Component({
  selector: 'app-add-depatment-component',
  templateUrl: './add-depatment-component.component.html',
  styleUrls: ['./add-depatment-component.component.css']
})
export class AddDepatmentComponentComponent {
  @Output() onDepartmentAdd:EventEmitter<Department>=new EventEmitter<Department>();
  dept=new Department();
  Add(){
    this.onDepartmentAdd.emit(this.dept);
  }
}
