import { Component } from '@angular/core';
import { NewGameService } from '../new-game.service';

@Component({
  selector: 'app-game-won',
  templateUrl: './game-won.component.html',
  styleUrls: ['./game-won.component.css']
})
export class GameWonComponent {
  private newGameService: NewGameService;

  constructor(newGameService: NewGameService) {
    this.newGameService = newGameService;
  }

  playAgain() {
    this.newGameService.newGame();
  }

}
