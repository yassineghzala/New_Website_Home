import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  members:any
  month!:string
  connectedUser!: Member;
  months:any=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"]
  constructor(private mservice:MemberService,private active:ActivatedRoute,){}
  ngOnInit(){
    this.month=this.months[new Date().getMonth()]
    console.log("month",this.month);
    
    this.mservice.getLeaderboard().subscribe((res)=>{
      this.members=res
      console.log(this.members);
    })
    const connectedUserId=this.active.snapshot.params['id'];
    this.mservice.getMemberById(connectedUserId).subscribe((res)=>{
      this.connectedUser=res[0]
      console.log("f west=",this.connectedUser)
    })
  }
}
