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
    
    this.mservice.getAllMembers().subscribe((res)=>{
      this.members=res
      console.log(this.members);
      this.members=this.tri(this.members)
      console.log(this.members);
    })
    const connectedUserId=this.active.snapshot.params['id'];
    this.mservice.getMemberById(connectedUserId).subscribe((res)=>{
      this.connectedUser=res[0]
      console.log("f west=",this.connectedUser)
    })
  }
  tri(users:any){
    let permut=false
    do{
      permut=false
      for(let i=0;i<users.length-1;i++){
        if (users[i].score<users[i+1].score) {
          let aux=users[i]
          users[i]=users[i+1]
          users[i+1]=aux
          permut=true
        }
        }
    }while (permut==true);

    
    return users
  }

}
