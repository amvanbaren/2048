import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ScoreboardService } from '../scoreboard.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnDestroy {
  private subscription: Subscription;
  score: number;
  best: number;

  constructor(service: ScoreboardService) {
    this.score = 0;
    this.best = 0;

    this.subscription = service.scoreChanged$.subscribe(score => {
      console.log('SCORE CHANGE');
      this.score += score;
      if (this.best < this.score) {
        this.best = this.score;
      }

      console.log('score: ' + this.score);
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
