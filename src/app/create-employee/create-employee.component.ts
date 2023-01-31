import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

 
   employee: Employee= new  Employee();

   constructor(private employeeService: EmployeeService,private router:Router, private formBuilder: FormBuilder ) { }
   empdetail: FormGroup
  //   selectedHobby:any=[];
  //   hobbyarc=[
  //     {"key":"cricket","value":"cricket"},
  //     {"key":"chess","value":"chess"},
  //     {"key":"dance","value":"dance"},
  //     {"key":"football","value":"football"}
  // ]

  ngOnInit(): void {
    this.empdetail = this.formBuilder.group({
      id:[''],
    name: ['',[Validators.required]],
      email:['', [Validators.required, Validators.email]],
      salary:['',Validators.required]
      // gender:['']
    })
  
  }
  get f(){
    return this.empdetail.controls;
  }

  

  saveEmloyee(){
  console.log(this.empdetail);
  // this.employee.id = this.form.value.id;
  this.employee.name = this.empdetail.value.name;
  this.employee.email = this.empdetail.value.email;
  this.employee.salary = this.empdetail.value.salary;
  // this.employee.gender = this.form.value.gender;



    // this.employee.hobby= this.selectedHobby.toString();
    // console.log(this.employee.hobby);

    this.employeeService.createEmployee(this.employee).subscribe(data =>{
       console.log(data);
       this.goToEmployeeList();
    },error =>console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])

  }

  onSubmit(){
    // alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.log(this.employee);
    this.saveEmloyee();
  }


//   hobbyChange(event:any){
//     let index=this.selectedHobby.indexOf(event.target.value);
// if(index== -1){
//   this.selectedHobby.push(event.target.value);
// }else{
//   this.selectedHobby.splice(index,1);
    
 }
    
  
     
  // console.log(this.selectedHobby);
  
// }
// }
