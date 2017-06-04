import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewGameService {
  private newGameSource: Subject<any>;
  newGame$: Observable<any>;

  constructor() {
    this.newGameSource = new Subject<any>();
    this.newGame$ = this.newGameSource.asObservable();
  }

  newGame() {
    this.newGameSource.next(true);
  }
}
