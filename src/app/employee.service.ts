import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURl= "http://localhost:1313/api/path1/employee";

  constructor(private http: HttpClient) { }
  getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseURl}`);
  }


  createEmployee(employee:Employee): Observable<object>{
    return this.http.post(`${this.baseURl}` , employee);
  }

  getEmployeeById(id:number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseURl}/${id}`);
  }
  updatedEmployee(empdetail:any){
    return this.http.put(`${this.baseURl}`,empdetail);
  }


  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURl}/${id}`);
  }
}
