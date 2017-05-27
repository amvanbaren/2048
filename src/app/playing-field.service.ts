import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayingFieldService {
  private playingFieldResetSource: Subject<any>;
  playingFieldReset$: Observable<any>;

  constructor() {
    this.playingFieldResetSource = new Subject<any>();
    this.playingFieldReset$ = this.playingFieldResetSource.asObservable();
  }

  resetPlayingField() {
    this.playingFieldResetSource.next(true);
  }
}
