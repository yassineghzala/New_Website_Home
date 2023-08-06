import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  constructor(private bostagi:HttpClient){}
  assignmentsUrl="http://localhost:3000/assignment"
  getActiveAssignments(){
    return this.bostagi.get<{res:any}>(`${this.assignmentsUrl}?statue=${true}`)
  }
  getAssignmentById(id:number):Observable<any>{
    return this.bostagi.get<{res:Assignment}>(`${this.assignmentsUrl}?id=${id}`)
  }
  getAllAssignments():Observable<any>{
    return this.bostagi.get<{res:any}>(this.assignmentsUrl)
  }
  getAssignmentByDep(dep:string):Observable<any>{
    return this.bostagi.get<{res:any}>(`${this.assignmentsUrl}?department=${dep}`)
  }
}
