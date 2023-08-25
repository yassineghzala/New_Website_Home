import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environment'; 

@Injectable({
  providedIn: 'root'
})
export class HsService {

  constructor(private bostagi:HttpClient) { }
  scoreUrl=environment.apiUrl+"/scoreHistory"

  getLastScores(id:number):Observable<any>{
    return this.bostagi.get<{ res: any; }>(`${this.scoreUrl}?userId=${id}`);
  }
}
