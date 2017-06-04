import { Component } from '@angular/core';
import { NewGameService } from '../new-game.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent {

  private newGameService: NewGameService;
  
  constructor(newGameService: NewGameService) {
    this.newGameService = newGameService;
  }

  tryAgain() {
    this.newGameService.newGame();
  }
}
