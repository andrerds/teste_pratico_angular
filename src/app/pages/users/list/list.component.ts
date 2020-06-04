import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Route, Router } from '@angular/router';
import { FavoriteService } from '../../../services/favorite.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users$: Observable<UserModel[]>;
  headElements = ['id', 'name', 'email', 'acao'];
  fav$: UserModel[] = [];
  colorFav: string = null;

  usersfav;
  public iconFavorite: Array<any>;

  constructor(
      private userService: UserService,
      private router: Router,
      private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getAllUsers();
    this.users$.pipe(take(1)).subscribe( users => {

      this.favoriteService.getAllFavorite().then(res => {
        this.usersfav = res;

        // const idUser = users.map(user => user.id); // ID Api
        // const idUserF = res.map( userF => userF.user.id ); // ID Salve Storage
      });

    });

  }

getDetail(id) {
  this.router.navigate(['/users', id]).then(() => {
    console.log('Id', id);
  }).catch( e => console.log(e));
}
favorites(index) {
  this.iconFavorite[index].checked = !this.iconFavorite[index].checked;
}
salve(user: UserModel) {
  this.favoriteService.favSave(user, true ).then(() => {
    alert('Adicionado ao favoritos');
  }).catch(e => alert('Erro ao salvar' +  e));
}

}
