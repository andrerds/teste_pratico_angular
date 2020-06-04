import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public islogado = false;
  constructor(private userServer: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userServer.getCredentials().then((data) => {
      if (data.token) {
        this.islogado = true;
      }
    });
  }
 onLogout() {
   this.userServer.setCredentials(null, null, null);
   this.router.navigateByUrl('/login');
 }
}
