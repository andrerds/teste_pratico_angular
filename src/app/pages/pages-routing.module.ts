import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './users/list/list.component';
import { ListdetailComponent } from './users/listdetail/listdetail.component';
import { FavoritesComponent } from './users/favorites/favorites.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'users', component: ListComponent },
  { path: 'users/:id', component: ListdetailComponent },
  { path: 'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
