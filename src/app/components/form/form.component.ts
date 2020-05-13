import { Component, OnInit, inject, Inject } from '@angular/core';
import {DriverService } from '../../services/driver.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'formModal',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  //Aqui inyectamos 
  constructor(public driver:DriverService,
    //Esto es una instancia
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) data 
    ) { }

  ngOnInit(): void {
  }

  onSaveForm(){
    this.driver.editDriver(this.driver.selected);
    /*if(this.driver.selected.id == null){
      //new
      let newDriver = {
        name: this.driver.selected.name,
        city: this.driver.selected.city,
        order: this.driver.selected.order
      }
      this.driver.addDriver(newCustomer);
    }else{
    this.driver.editDriver(this.driver.selected);
    //}*/
    this.close();
  }

  //Es un metodo void porque no devuelve nada
  close(): void {
    this.dialogRef.close();
  }

}
