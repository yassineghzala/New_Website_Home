import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {

  constructor(private bostagi:HttpClient) { }
  images=environment.apiUrl+"/images  "

  getImageByName(name:string):Observable<Blob>{
    return this.bostagi.get(`${this.images}/${name}`, { responseType: 'blob' })
  }
}
