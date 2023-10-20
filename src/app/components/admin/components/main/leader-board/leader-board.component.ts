import { Component } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent {
  members!:Member[]
  constructor(private mService:MemberService){}
  ngOnInit(){
    this.mService.getLeaderboard().subscribe((res)=>{
      this.members=res;
    })
  }
}
