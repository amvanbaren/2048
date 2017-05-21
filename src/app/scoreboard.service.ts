import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ScoreboardService {

  private scoreChangedSource: Subject<number>;
  scoreChanged$: Observable<number>;

  constructor() {
    this.scoreChangedSource = new Subject<number>();
    this.scoreChanged$ = this.scoreChangedSource.asObservable();
  }

  changeScore(score: number) {
    console.log('score: ' + score);
    this.scoreChangedSource.next(score);
  }
}
