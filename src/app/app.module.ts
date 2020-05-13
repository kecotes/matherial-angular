import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat/mat.module';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { CustomerService } from './services/customer.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
// firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormComponent } from './components/form/form.component';

import { FormsModule } from '@angular/forms';
  import { from } from 'rxjs';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCustomersComponent,
    FormComponent,
    ToolbarComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    FormsModule,
    MatModule,
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent]
})
export class AppModule { }
