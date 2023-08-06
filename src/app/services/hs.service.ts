import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HsService {

  constructor(private bostagi:HttpClient) { }
  scoreUrl="http://localhost:3000/scoreHistory"

  getLastScores(id:number):Observable<any>{
    return this.bostagi.get<{ res: any; }>(`${this.scoreUrl}?userId=${id}`);
  }
}
