import { Component, OnInit, inject, Inject } from '@angular/core';
import {CustomerService } from '../../services/customer.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'formModal',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  //Aqui inyectamos 
  constructor(public customer:CustomerService,
    //Esto es una instancia
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) data ) { }

  ngOnInit(): void {
  }

  onSaveForm(){
    if(this.customer.selected.id == null){
      //new
      let newCustomer = {
        name: this.customer.selected.name,
        city: this.customer.selected.city,
        order: this.customer.selected.order
      }
      this.customer.addCustomer(newCustomer);
    }else{
    this.customer.editCustomer(this.customer.selected);
    }
    this.close();
  }

  //Es un metodo void porque no devuelve nada
  close(): void {
    this.dialogRef.close();
  }

}
