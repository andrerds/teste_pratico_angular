import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public islogado = false;
  constructor(private userServer: UserService, private router: Router) { }

 async ngOnInit(): Promise<void> {
    this.userServer.getCredentials().then((data) => {
      if (data.token) {
        this.islogado = true;
      }
    });
  }
  userPage(): void {
    this.router.navigate(['/users']);
  }
  favoritesPage(): void {
    this.router.navigate(['/favorites']);
  }
 async onLogout(): Promise<any> {
  const remove = {
    iduser: localStorage.removeItem('iduser'),
    name: localStorage.removeItem('name'),
    email: localStorage.removeItem('email'),
    token: localStorage.removeItem('token'),
    authorization: localStorage.removeItem('authorization')
  };
  this.router.navigate(['/login']);

  return await remove;
 }
}
