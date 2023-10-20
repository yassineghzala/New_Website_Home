import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { MonthScore } from '../models/month-score';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonthScoreService {
  monthScoreUrl=environment.apiUrl+"/MonthScore";

  constructor(private bostagi:HttpClient) { }
  addMonthS(form:MonthScore):Observable<any>{
    return this.bostagi.post<{ res: MonthScore; }>(this.monthScoreUrl, form);
  }
  getAllMonthsS():Observable<any>{
    return this.bostagi.get<{res:MonthScore[]}>(this.monthScoreUrl);
  }
}
