import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MonthScore } from 'src/app/models/month-score';
import { MonthScoreService } from 'src/app/services/month-score.service';

@Component({
  selector: 'app-points-popup',
  templateUrl: './points-popup.component.html',
  styleUrls: ['./points-popup.component.css']
})
export class PointsPopupComponent {
  monthScores!:MonthScore[]
  constructor(private msService:MonthScoreService,@Inject(MAT_DIALOG_DATA) public data: any){}
  ngOnInit(){
    this.msService.getAllMonthsS(this.data.currentUser.id).subscribe((res)=>{
      this.monthScores=res;
    })
  }
}
