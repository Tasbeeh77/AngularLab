import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from 'src/app/Models/deprtment';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent {
  @Output() onDepartmentEdit:EventEmitter<Department>=new EventEmitter<Department>();
  @Input() dept = new Department();
  Edit(){
    this.onDepartmentEdit.emit(this.dept);}
}
