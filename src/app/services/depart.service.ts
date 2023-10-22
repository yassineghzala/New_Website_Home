import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';
import { Departement } from '../models/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartService {
  departUrl=environment.apiUrl+"/department";
  constructor(private bostagi:HttpClient) { }

  getDepartById(id:number):Observable<any>{
    return this.bostagi.get<{ res: Departement; }>(`${this.departUrl}/${id}`);
  }

  addDepart(form:Departement):Observable<any>{
    return this.bostagi.post<{ res: Departement; }>(this.departUrl,form);
  }

  getAllDeparts():Observable<any>{
    return this.bostagi.get<{ res: Departement[]; }>(this.departUrl);
  }
}
