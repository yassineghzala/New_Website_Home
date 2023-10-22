import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { environment } from '../../environment'; 

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  memberUrl=environment.apiUrl+"/member"
  constructor(private bostagi:HttpClient) { }
  getMemberById(id:number):Observable<any>{
    return this.bostagi.get<{res:Member}>(`${this.memberUrl}/${id}`)
  }
  getAllMembers():Observable<any>{
    return this.bostagi.get<{res:any}>(this.memberUrl)
  }
  addMember(id:number,form:Member):Observable<any>{
    return this.bostagi.post<{res:Member}>(`${this.memberUrl}/${id}`,form)
  }
  getLeaderboard():Observable<any>{
    return this.bostagi.get<{res:any}>(`${this.memberUrl}/${true}`)
  }
  deleteMember(id:number):Observable<any>{
    return this.bostagi.delete(`${this.memberUrl}/${id}`);
  }
}
