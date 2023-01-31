import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-my-cell',
  template: `
     <div class='action_col'><span class='iconBtn icoBtn_edit' ><i class='fa fa-pencil' aria-hidden='true'></i></span>
  <span class='iconBtn icoBtn_delete' ><i  class='fa fa-trash' aria-hidden='true'></i></span></div>
  `,
  styles: [
  ]
})
export class MyCellComponent implements OnInit,ICellRendererAngularComp {

  constructor() { }
  agInit(params: ICellRendererParams<any, any>): void {
    throw new Error('Method not implemented.');
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
