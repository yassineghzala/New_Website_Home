import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Depo } from '../models/Depo';

@Injectable({
  providedIn: 'root'
})
export class DepoService {
  constructor(private bostagi:HttpClient){}
  depoUrl=environment.apiUrl+"/depo"

  addWork(idmember:number,idtask:number,work:string):Observable<any>{
    return this.bostagi.post<{ res: Depo; }>(`${this.depoUrl}/${idmember}/${idtask}`, work);
  }

  addNote(idDepo:number,note:number){
    return this.bostagi.put<{res:Depo}>(`${this.depoUrl}/${idDepo}`, note)
  }
}
