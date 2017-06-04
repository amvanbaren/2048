import { Component, OnDestroy } from '@angular/core';
import { ScoreboardService } from '../score-board.service';
import { PlayingFieldService } from '../playing-field.service';
import { NewGameService } from '../new-game.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnDestroy {
  private subscription: Subscription;

  private scoreboardService: ScoreboardService;
  private playingFieldService: PlayingFieldService;

  constructor(service: NewGameService, scoreboardService: ScoreboardService, playingFieldService: PlayingFieldService) { 
    this.scoreboardService = scoreboardService;
    this.playingFieldService = playingFieldService;

    this.subscription = service.newGame$.subscribe(() => {
      this.newGame();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newGame() {
    this.scoreboardService.resetScore();
    this.playingFieldService.resetPlayingField();
  }
}
