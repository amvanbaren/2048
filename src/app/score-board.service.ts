import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ScoreboardService {

  private scoreChangedSource: Subject<number>;
  scoreChanged$: Observable<number>;

  private scoreResetSource: Subject<any>;
  scoreReset$: Observable<any>;

  constructor() {
    this.scoreChangedSource = new Subject<number>();
    this.scoreChanged$ = this.scoreChangedSource.asObservable();

    this.scoreResetSource = new Subject<any>();
    this.scoreReset$ = this.scoreResetSource.asObservable();
  }

  changeScore(score: number) {
    this.scoreChangedSource.next(score);
  }

  resetScore() {
    this.scoreResetSource.next(true);
  }
}
