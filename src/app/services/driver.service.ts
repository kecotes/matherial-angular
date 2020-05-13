import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DriverI } from '../../models/driver.interface';

export interface DriverID extends DriverI { id: string; }
@Injectable({
  providedIn: 'root'
})

export class DriverService {
  //Propiedades
  private driverCollection: AngularFirestoreCollection<DriverI>;
  drivers: Observable<DriverID[]>;
  
  //public locationArray = {
  //  latitude: 0,
  //  longitude: 0
  //};
  
  public selected = {
    id: null,
    name: '',
    city: '',
    order: '',
    driving_license: '',
    email: '',
    identification_document: '',
    identification_number: '',
    location: {
      latitude: 0,
      longitude: 0
    },
    location_date: '',
    mobile_phone: '',
    names: '',
    profile_picture: '',
    registration_date: '',
    status: '',
    status_driving_license: 0,
    status_identification_document: 0,
    status_profile_picture: 0,
    surnames: '',
    token: '',
    user_blocking: false
  };

  constructor(private readonly afs:AngularFirestore) {
    //Por medio de estos metodos recuperamos la colleccion y luego iteramos sobre cada uno de los documentos
    this.driverCollection = afs.collection<DriverI>('Environment/tests/drivers');
    //db.collection('rooms').doc('roomA').collection('messages').doc('message1');
    this.drivers = this.driverCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as DriverI;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

  //metodo obtenr clientes
  getAllCustomers(){
    return this.drivers;
  }

  editDriver(driver: DriverID){
    return this.driverCollection.doc(driver.id).update(driver);
    //return this.driverCollection.doc('tests').collection('drivers').doc(driver.id).update(driver);
  }
  
  deleteDriver(id: string){
    return this.driverCollection.doc(id).delete();
  }
  /*
  addCustomer(customer:CustomerI){
    return this.customerCollection.add(customer);
  }*/

}
