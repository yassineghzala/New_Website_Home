import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment'; 
import { Event } from '../models/event';

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
  getAllEvents():Observable<any>{
    return this.bostagi.get<{res:any}>(this.eventUrl);
  }
  addEvent(id:number,form:Event):Observable<any>{
    return this.bostagi.post<{res:Event}>(`${this.eventUrl}/${id}`,form);
  }
  getEventById(id:number):Observable<any>{
    return this.bostagi.get<{res:Event}>(`${this.eventUrl}/${id}`);
  }
  updateEvent(id:number,form:Event):Observable<any>{
    return this.bostagi.put<{res:Event}>(`${this.eventUrl}/${id}`,form);
  }
  deleteEventById(id:number):Observable<any>{
    return this.bostagi.delete(`${this.eventUrl}/${id}`);
  }
}
