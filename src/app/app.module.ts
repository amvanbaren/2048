import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewGameComponent } from './new-game/new-game.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { PlayingFieldComponent } from './playing-field/playing-field.component';
import { TileComponent } from './tile/tile.component';
import { GameOverComponent } from './game-over/game-over.component';
import { GameWonComponent } from './game-won/game-won.component';

import { ScoreboardService } from './score-board.service';
import { PlayingFieldService } from './playing-field.service';
import { NewGameService } from './new-game.service';

@NgModule({
  declarations: [
    AppComponent,
    ScoreBoardComponent,
    PlayingFieldComponent,
    TileComponent,
    NewGameComponent,
    GameOverComponent,
    GameWonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [ScoreboardService, PlayingFieldService, NewGameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
