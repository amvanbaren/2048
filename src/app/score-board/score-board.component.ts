import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ScoreboardService } from '../score-board.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnDestroy {
  private scoreChangedSubscription: Subscription;
  private scoreResetSubscription: Subscription;
  score: number;
  best: number;

  constructor(service: ScoreboardService) {
    this.score = 0;
    this.best = 0;

    this.scoreChangedSubscription = service.scoreChanged$.subscribe(score => {
      this.score += score;
      if (this.best < this.score) {
        this.best = this.score;
      }
    });

    this.scoreResetSubscription = service.scoreReset$.subscribe(() => {
      this.score = 0;
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.scoreChangedSubscription.unsubscribe();
    this.scoreResetSubscription.unsubscribe();
  }
}
