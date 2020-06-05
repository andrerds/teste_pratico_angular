import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected header;
  private users = environment.api;
  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.users);
  }

  public getUser(id): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.users}/${id}`);
  }
  postCustom(endpoint?: string, body?: any, reqOpts?: any) {

  }
  async post(endpoint: string, body: any, reqOpts?: any) {
    this.header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + (await this.getCredentials()).token);
    // return this.http.post(this.url + endpoint, body, { headers: this.header });
  }

  setCredentials(iduser, email: string, token: string) {
    localStorage.setItem('iduser', iduser);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('token', token);
    localStorage.setItem('authorization', 'true');
  }
   async getCredentials() {
    return {
      iduser: localStorage.getItem('iduser'),
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email'),
      token: localStorage.getItem('token'),
      authorization: localStorage.getItem('authorization')
    };
  }
}
