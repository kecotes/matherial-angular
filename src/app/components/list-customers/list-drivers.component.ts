import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DriverI } from '../../../models/driver.interface';
import { DriverService } from '../../services/driver.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
//import { FormComponent } from '../form/form.component';
@Component({
  selector: 'ListDrivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.scss']
})
export class ListDriversComponent implements OnInit {

  displayedColumns: string[] = ['names', 'email', 'mobile_phone', 'profile_picture','actions']; //La tabla tiene estas 4 columas
  dataSource = new MatTableDataSource(); // Aqui se crea el objeto tabla y se alimenta del array de arriba
  @ViewChild(MatSort,{read:true, static:false}) sort: MatSort;

  //Aqui inyectamos el servicio a esta clase
  constructor(
    private driverService: DriverService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.driverService.getAllCustomers()
    .subscribe(res => this.dataSource.data = res);
    console.log(this.dataSource.data);
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

  // Este es un Metodo
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*onEdit(element){ 
    this.resetForm();
    this.openModal();
    if(element){
    this.customerService.selected = element;
    }
   }

  onDelete(id: string) {
    //Aqui llamamos el servicio Customer, luego podemos accesar a todos us metodos
    //Y accesamos al metodo delete y como este es un metodo le podemos mandar un parametro id
    this.customerService.deleteCustomer(id);
   }

   openModal(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { 
      title: 'Modal'
    };
    dialogConfig.autoFocus = true;
    this.dialog.open(FormComponent, dialogConfig);
   }

   resetForm(): void{
     this.customerService.selected.name = '';
     this.customerService.selected.city = '';
     this.customerService.selected.order = '';
     this.customerService.selected.id = null;
   }*/

}
