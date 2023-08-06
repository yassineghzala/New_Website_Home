import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventUrl="http://localhost:3000/event"

  constructor(private bostagi:HttpClient) { }
  getActiveEvents():Observable<any>{
    return this.bostagi.get<{res:any}>(`${this.eventUrl}?statue=${true}`);
  }
  getExpiredEvents():Observable<any>{
    return this.bostagi.get<{res:any}>(`${this.eventUrl}?statue=${false}`);
  }
}
