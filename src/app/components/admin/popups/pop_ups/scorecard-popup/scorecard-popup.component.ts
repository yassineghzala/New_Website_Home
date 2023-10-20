import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Member } from 'src/app/models/member';
import { MonthScore } from 'src/app/models/month-score';
import { MemberService } from 'src/app/services/member.service';
import { MonthScoreService } from 'src/app/services/month-score.service';

@Component({
  selector: 'app-scorecard-popup',
  templateUrl: './scorecard-popup.component.html',
  styleUrls: ['./scorecard-popup.component.css']
})
export class ScorecardPopupComponent {
  members!: Member[]
  scoreCard!: FormGroup
  score!: MonthScore
  constructor(private mService: MemberService, private formBuilder: FormBuilder, private mSService: MonthScoreService) { }
  ngOnInit() {
    this.mService.getAllMembers().subscribe((res) => {
      this.members = res;
      console.log("members",this.members);
      
    })
    this.scoreCard = this.formBuilder.group({
      idDepart: [""],
      idUser: [""],
      media: [""],
      discipline: [""],
      contribution: [""],
      departPoints: [""],
      month: [""],
      depoNote: ["10"],
      moyen: ["10"],
    });
  }
  addMonthScore(){
    this.score=this.scoreCard.value;
    console.log("aaa",this.score);
    this.mSService.addMonthS(this.score);
  }
}
