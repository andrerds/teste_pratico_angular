import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  async login(value: any) {
    if (this.loginForm.valid) {

      this.userService.getCredentials().then((data) => {
        console.log('Data', data.token);
        if (data.token == null) {
          const iduser = new Date().getTime() + Math.floor((Math.random() * 1000) + 1);
          const token = new Date().toISOString() + Math.floor((Math.random() * 1000) + 2);
          this.userService.setCredentials(iduser,  this.loginForm.value.email, token);
          setTimeout(() => {
            this.router.navigateByUrl('/users');
        }, 100);
        } else if ( !data.token ) {
          this.router.navigateByUrl('/login');
        }
      });
    }
  }



}
