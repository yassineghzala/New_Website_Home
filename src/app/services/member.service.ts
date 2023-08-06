import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  memberUrl="http://localhost:3000/member"
  constructor(private bostagi:HttpClient) { }
  getMemberById(id:number):Observable<any>{
    return this.bostagi.get<{res:Member}>(`${this.memberUrl}?id=${id}`)
  }
  getAllMembers():Observable<any>{
    return this.bostagi.get<{res:any}>(this.memberUrl)
  }
}
