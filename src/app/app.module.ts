import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewGameComponent } from './new-game/new-game.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { PlayingFieldComponent } from './playing-field/playing-field.component';
import { TileComponent } from './tile/tile.component';

import { ScoreboardService } from './score-board.service';
import { PlayingFieldService } from './playing-field.service';
import { GameOverComponent } from './game-over/game-over.component';
import { GameWonComponent } from './game-won/game-won.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreBoardComponent,
    PlayingFieldComponent,
    TileComponent,
    NewGameComponent,
    GameOverComponent,
    GameWonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ScoreboardService, PlayingFieldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
