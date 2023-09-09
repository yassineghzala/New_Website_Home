import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member';
import { User } from 'src/app/models/user';
import { EventService } from 'src/app/services/event.service';
import { MemberService } from 'src/app/services/member.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  connectedUser!:Member
  events!:any
  activeEvents:any
  expiredEvents:any
  constructor(private mservice:MemberService,private active:ActivatedRoute,private eservice:EventService){}
  ngOnInit(){
    const Id=this.active.snapshot.params['id'];
    this.mservice.getMemberById(Id).subscribe((res)=>{
      this.connectedUser=res[0]
    })
    this.eservice.getAllEvents().subscribe((res)=>{
      this.events=res
      console.log("res",res);
      console.log(this.events);
      
      
    })
  }
}
