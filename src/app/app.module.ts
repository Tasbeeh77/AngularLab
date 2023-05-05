import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { FormsModule } from '@angular/forms';
import { DepartmentModule } from './department/department.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,CoreModule,StudentModule,FormsModule,DepartmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
