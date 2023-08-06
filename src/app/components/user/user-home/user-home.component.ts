import { Component, Input } from '@angular/core';
import { Member } from 'src/app/models/member';
import { AssignmentService } from 'src/app/services/assignment.service';
import { EventService } from 'src/app/services/event.service';
import { HsService } from 'src/app/services/hs.service';
import { MemberService } from 'src/app/services/member.service';



@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  @Input() currentUser!:Member
  members:any
  // lastScores:any
  activeAssignments:any
  activeEvents:any
  score!:number 
   constructor(private mservice:MemberService,private hsservice:HsService,private aservice:AssignmentService,private eservice:EventService){}
   ngOnInit(){
    console.log("current",this.currentUser);
    this.score=this.currentUser.score
    this.mservice.getAllMembers().subscribe((res)=>{
      this.members=res
      console.log("kbal tri",this.members);
      this.members=this.tri(this.members)
      console.log("baad tri",this.members);
    })
    // this.hservice.getLastScores(this.currentUser.id).subscribe((res)=>{
    //   this.lastScores=res;
    //   for (let i = 0; i < this.lastScores.length; i++) {
    //     this.score=this.score+this.lastScores[i].score
    //   }
    //   console.log("this.las",this.lastScores);
    // })
    this.aservice.getActiveAssignments().subscribe((res)=>{
      this.activeAssignments=res
      console.log("active",this.activeAssignments);
     })
    this.eservice.getActiveEvents().subscribe((res)=>{
      this.activeEvents=res
      console.log("active evvents",this.activeEvents);
      
    })
    
   }
  tri(members:any){
    let permut=false
    do{
      permut=false
      for(let i=0;i<members.length-1;i++){
        if (members[i].score<members[i+1].score) {
          let aux=members[i]
          members[i]=members[i+1]
          members[i+1]=aux
          permut=true
        }
        }
    }while (permut==true);

    
    return members
  }
}
