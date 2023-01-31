import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  empdetail : FormGroup
  id: number
  employee: Employee = new Employee();
  


  // goToList: any;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router, private formBulider: FormBuilder) { }

  ngOnInit(): void {
     this.Form();
     this.getById();
    
  }
  Form(){
    this.empdetail = this.formBulider.group({
      id: [''],
      name: [''],
      email: [''],
      salary: ['']
    })

  }
  patch(){
    this.empdetail.patchValue({'id' : this.employee.id}),
    this.empdetail.patchValue({ 'name' : this.employee.name}),
      this.empdetail.patchValue({ 'email' : this.employee.email}),
      this.empdetail.patchValue({ 'salary' : this.employee.salary})


  }
  getById() {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      this.patch();
    }, error => console.log(error));
  }

  onSubmit(){

     console.log(this.empdetail.value);
    this.employeeService.updatedEmployee(this.empdetail.value).subscribe(data => {

      this.goToEmployeeList();
    }, error => console.log(error));

  }
  goToEmployeeList() {
    this.router.navigate(['/employees'])

  }

}
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Employee } from '../employee';
// import { EmployeeService } from '../employee.service';

// @Component({
//   selector: 'app-update-employee',
//   templateUrl: './update-employee.component.html',
//   styleUrls: ['./update-employee.component.css']
// })
// export class UpdateEmployeeComponent implements OnInit {

//   id:number
//   employee: Employee= new Employee();
//   constructor(private formBuilder:FormBuilder ,private employeeService: EmployeeService,private route:ActivatedRoute,private router :Router) { }
//   empDetail : FormGroup
//   // employees : Employee[] = [];


//   ngOnInit(): void {
//     this.Form();
//     this.GetRecordByid();
   
//     }

//     Form(){
//       this.empDetail = this.formBuilder.group({
//         id: [''],
//         name: [''],
//         email: [''],
//         salary: [''],
//       })
//     }


   
//     ControlValues(){
//       console.warn(this.empDetail);
//       this.empDetail.patchValue({'id': this.employee.id});
//       this.empDetail.patchValue({'name':this.employee.name});
//       this.empDetail.patchValue({'email':this.employee.email});
//       this.empDetail.patchValue({'salary':this.employee.salary})

//     }

//     GetRecordByid(){
//       // console.warn(this.empDetail.value)
//       this.id=this.route.snapshot.params['id'];
//       this.employeeService.getEmployeeById(this.id).subscribe(data =>{
//         this.employee=data;
//         this.ControlValues();

//       },error => console.log(error));

//     }

//     onSubmit(){ 
//       // console.log(this.empDetail.value)
//     // console.log('hhhh');
//       this.employeeService.updatedEmployee(this.empDetail.value).subscribe(data =>{
      
//        this.goToEmployeeList();
        
//       },error => console.log(error));
       
//     }
//     goToEmployeeList(){
//       this.router.navigate(['/employees'])
  
//     }
//   }
