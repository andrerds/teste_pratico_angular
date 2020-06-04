import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { StorageServiceModule } from 'ngx-webstorage-service';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
     ],
  imports: [
    StorageServiceModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule , ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
