import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MaterialComponent } from './material/material.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: 'employees' , component: EmployeeListComponent},
  {path: 'create-employee', component:CreateEmployeeComponent},
  {path: '', redirectTo: 'employees',pathMatch:'full'},
  {path:'update-employee/:id' ,component:UpdateEmployeeComponent},
   {path:'aggrid-demo', component:AgGridComponent},
   {path:'material', component:MaterialComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
