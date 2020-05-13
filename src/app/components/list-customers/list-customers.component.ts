import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerI } from '../../../models/customer.interface';
import { CustomerService } from '../../services/customer.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
@Component({
  selector: 'listCustomers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'city', 'order', 'actions','new']; //La tabla tiene estas 4 columas
  dataSource = new MatTableDataSource(); // Aqui se crea el objeto tabla y se alimenta del array de arriba
  @ViewChild(MatSort,{read:true, static:false}) sort: MatSort;

  //Aqui inyectamos el servicio a esta clase
  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(res => this.dataSource.data = res);
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

  // Este es un Metodo
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(element){ 
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
   }

}
