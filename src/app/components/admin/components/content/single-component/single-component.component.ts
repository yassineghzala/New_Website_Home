import { Component, Input } from '@angular/core';
import { Depo } from 'src/app/models/Depo';
import { Member } from 'src/app/models/member';
import { DepoService } from 'src/app/services/depo.service';

@Component({
  selector: 'app-single-component',
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.css']
})
export class SingleComponentComponent {
  @Input() member!:Member
  @Input() depo!:Depo
  constructor(private dService:DepoService){}
  updateNote(note:string){
    this.dService.addNote(this.depo.id,parseInt(note)).subscribe((res)=>{
      console.log("note updated");
      
    })
  }
}
