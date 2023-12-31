import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from '../models/assignment';
import { environment } from '../../environment'; 
@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  constructor(private bostagi:HttpClient){}
  assignmentsUrl=environment.apiUrl+"/task"
  getActiveAssignments(){
    return this.bostagi.get<{res:any}>(`${this.assignmentsUrl}?statue=${true}`)
  }
  getAssignmentById(id:number):Observable<any>{
    return this.bostagi.get<{res:Assignment}>(`${this.assignmentsUrl}/${id}`)
  }
  getAllAssignments():Observable<any>{
    return this.bostagi.get<{res:any}>(this.assignmentsUrl)
  }
  getAssignmentByDep(dep:number):Observable<any>{
    return this.bostagi.get<{res:any}>(`${this.assignmentsUrl}?department=${dep}`)
  }
  addAssignment(id:number,form:Assignment):Observable<any>{
    return this.bostagi.post<{res:Assignment}>(`${this.assignmentsUrl}/${id}`,form);
  }
  updateAssignment(id:number,form:Assignment):Observable<any>{
    return this.bostagi.put<{res:Assignment}>(`${this.assignmentsUrl}/${id}`,form);
  }
  deleteAssignmentById(id:number):Observable<any>{
    return this.bostagi.delete(`${this.assignmentsUrl}/${id}`);
  }
}
