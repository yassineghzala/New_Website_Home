import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment'; 

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventUrl=environment.apiUrl+"/event"

  constructor(private bostagi:HttpClient) { }
  getActiveEvents():Observable<any>{
    return this.bostagi.get<{res:any}>(`${this.eventUrl}?statue=${true}`);
  }
  getExpiredEvents():Observable<any>{
    return this.bostagi.get<{res:any}>(`${this.eventUrl}?statue=${false}`);
  }
}
