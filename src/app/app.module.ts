import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { StorageServiceModule } from 'ngx-webstorage-service';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';
import { UserService } from './services/user.service';
import { FavoriteService } from './services/favorite.service';

@NgModule({
  declarations: [
    AppComponent,
     ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    PagesRoutingModule,
    StorageServiceModule,
    FormsModule , ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAOmfN1Y-KgjmXiThZUsMbzpTqhCAMfW-U'
    }),
    MDBBootstrapModule.forRoot(),


  ],
  providers: [ UserService, FavoriteService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
