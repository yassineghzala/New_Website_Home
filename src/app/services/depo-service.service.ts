import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Depo } from '../models/Depo';

@Injectable({
  providedIn: 'root'
})
export class DepoServiceService {
  constructor(private bostagi:HttpClient){}
  depoUrl=environment.apiUrl+"/depo"

  addWork(form:Depo):Observable<any>{
    return this.bostagi.post<{ res: Depo; }>(this.depoUrl, form);
  }
}
