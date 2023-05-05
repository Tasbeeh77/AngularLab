import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Department } from 'src/app/Models/deprtment';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent {
  @Output() onHide:EventEmitter<boolean>=new EventEmitter<boolean>();
  @Input()   DepartmentDetails=new Department();
  hideme(){
      this.onHide.emit(false);
  }
}
