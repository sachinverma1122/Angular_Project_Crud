import { HttpClient, HttpParams } from '@angular/common/http';
import { SelectorContext } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { ColDef, ColumnApi, GridApi, RowNodeTransaction } from 'ag-grid-community';
import { single } from 'rxjs';
import { __param } from 'tslib';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

  x
  id: number;


  // row data and column definitions
  public rowData: Employee[];
  public columnDefs: ColDef[];

  // gridApi and columnApi
  public api: GridApi;
  public columnApi: ColumnApi;

  //delete
  // public rowSelection: 'single';




  // pagination 
  gridOption: any = {
    cacheBlockSize: 2,
    paginationPageSize: 4
  };


  //edit user
  toastr: any;

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.columnDefs = this.createColumnDefs();

  }

  ngOnInit(): void {

    this.employeeService.getEmployeeList().subscribe(data => {
      this.rowData = data
    }, error => {
      console.log(error);
    })

  }
  // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;

    this.api.sizeColumnsToFit();
  }

  //remove it


  private createColumnDefs() {
    return [

      { headerName: 'ID', field: 'id', sortable: true, filter: true, checkboxSelection: true, floatingFilter: true },
      {
        headerName: 'Name', field: 'name', sortable: true, editable: true, filter: true, floatingFilter: true,
        cellRenderer: function (params) {
          if (params.data != null) {


            return params.data.name

          }

        }, filterParams: {
          caseSensitive: true
        }
      },


      {
        headerName: 'Email', field: 'email', sortable: true, filter: 'agTextColumnFiltern', minWidth: 200, editable: true, floatingFilter: true

      },
      {
        headerName: 'Salary', field: 'salary', sortable: true, filter: false
        , editable: true, floatingFilter: true
      },
      {
        field: 'Action',
        // stay cellRenderer: params => {
        //   return ` <button class="btn  btn-info" (click)="deleteUser(id)">delete User</button> `;
        // }
      },





    ]

  }


  // deleteUsers(){
  //   var selectedData =this.api.getSelectedRows();
  //   var id = this.api.updateRowData({ remove: selectedData });
  //   this.api.applyTransaction({remove:selectedData})
  // }

  // selectedDeleted(id) {
  //   var selectedData = this.api.getSelectedRows();
  //  // var id = this.api.updateRowData({ remove: selectedData });

  //   this.api.applyTransaction({remove:selectedData})
  //   this.employeeService.deleteEmployee(id).subscribe(data =>{
  //     console.log(data);
  //   })

  // selectedDeleted(id){

  //   // this.params.api.selectIndex(this.params.node.rowIndex);
  //   // var selectedData = this.params.api.getSelectedRows();
  //   // this.params.api.updateRowData({remove: selectedData});

  //    this.employeeService.deleteEmployee(id).subscribe(
  //      response => {
  //          if(response)
  //            //  this.params.api.selectIndex(this.params.node.rowIndex);
  //            var selectedData = this.api.getSelectedRows();
  //            this.api.updateRowData({ remove: selectedData });

  //          }
  //    )
  //   }

  //   rowsSelected() {
  //     return this.api && this.api.getSelectedRows().length > 0;
  // }
  // selectedDeleted(){

  //       let selectedData=  this.api.getSelectedRows()
  //       SelectorContext
  //       this.api.applyTransaction({remove:selectedData});



  //     }


  //stay deleteUser()
  // deleteUser(id) {
  //   var selectedRows = this.api.getSelectedRows();

  //   this.api.applyTransaction({ remove: selectedRows });

  //   this.employeeService.deleteEmployee(selectedRows[0].id).subscribe(data => {
  //     this.ngOnInit();
  //   });
  // }


  status: any;
  //Update user  


  //Stay editUser() and addUser() 
  // editUser() {
  //   const d = this.api.getEditingCells();
  //   if (this.api.getSelectedRows().length == 0) {
  //     return;
  //   }
  //   var row = this.api.getSelectedRows();
  //   this.employeeService.updatedEmployee(row[0]).subscribe(data => {

  //     console.log(data)
  //     this.ngOnInit();
  //   });
  // }

  // addUser() {
  //   this.router.navigate(['create-employee'])

  // }

}


