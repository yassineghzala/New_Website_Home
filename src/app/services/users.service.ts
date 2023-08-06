import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersUrl = "http://localhost:3000/user"
  constructor(private bostagi: HttpClient) { }

   getUserById(id: number):Observable<any> {
     return this.bostagi.get<{ res: any; }>(`${this.usersUrl}?id=${id}`);
   }
  getUsers():Observable<any> {
    return this.bostagi.get<{ res: any; }>(this.usersUrl);
  }
  // updateUser(form: User):Observable<any> {
  //   return this.bostagi.put<{ res: User; }>(`${this.usersUrl}/${form.id}`, form);
  // }
   getUserByUsername(username: string):Observable<any> {
     return this.bostagi.get<{ res: User}>(`${this.usersUrl}?username=${username}`)
   }
  // addUser(form:User):Observable<any>{
  //   return this.bostagi.post<{ res: any}>(this.usersUrl,form)
  // }
}
