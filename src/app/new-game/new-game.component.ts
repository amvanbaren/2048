import { Component, OnInit } from '@angular/core';
import { ScoreboardService } from '../score-board.service';
import { PlayingFieldService } from '../playing-field.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  private scoreboardService: ScoreboardService;
  private playingFieldService: PlayingFieldService;

  constructor(scoreboardService: ScoreboardService, playingFieldService: PlayingFieldService) { 
    this.scoreboardService = scoreboardService;
    this.playingFieldService = playingFieldService;
  }

  newGame() {
    this.scoreboardService.resetScore();
    this.playingFieldService.resetPlayingField();
  }
}
