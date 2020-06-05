import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import {ActivatedRoute} from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-listdetail',
  templateUrl: './listdetail.component.html',
  styleUrls: ['./listdetail.component.scss'],

})
export class ListdetailComponent implements OnInit {
  public user: UserModel;
  id: undefined;
  public loading = true;
  zoom = 5;
  lat = 0;
  lng = 0;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

 async ngOnInit(): Promise<void> {
  this.route.params.pipe(map(user => user.id)).subscribe( res => {
   this.id =  res;
  });
  const id = this.id;
  if (id) {
    setInterval(() => {
      this.loading = false;
    }, 2000);
    this.userService.getUser(id).subscribe((user)   => {
      console.log(user);
      const geo = {
          lat: user.address.geo.lat,
          lng: user.address.geo.lng
        };
      this.lat = Number(geo.lat);
      this.lng = Number(geo.lng);
      console.log('LAT', geo.lat + 'LONG', geo.lng);
      this.user = user;
    });
  }
  }

}
