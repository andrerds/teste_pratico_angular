import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../../services/favorite.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  usersfav = [];
  constructor(
    private favoriteService: FavoriteService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
     this.favoriteService.getAllFavorite().then(res => {this.usersfav = res; });
     this.userService.getCredentials().then((data) => {
      if (!data.token) {
        this.router.navigateByUrl('/login');
      }
     });
  }
}
