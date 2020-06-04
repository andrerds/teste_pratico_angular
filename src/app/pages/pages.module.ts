import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './users/list/list.component';
import { ListdetailComponent } from './users/listdetail/listdetail.component';
import { SharedModule } from '../shared/shared.module';
import { FavoritesComponent } from './users/favorites/favorites.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    ListComponent,
    ListdetailComponent,
    FavoritesComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PagesModule { }
