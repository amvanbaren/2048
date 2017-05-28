import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PlayingFieldComponent } from './playing-field/playing-field.component';
import { NewGameComponent } from './new-game/new-game.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { GameOverComponent } from './game-over/game-over.component';
import { TileComponent } from './tile/tile.component';
import { ScoreboardService } from './score-board.service';
import { PlayingFieldService } from './playing-field.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PlayingFieldComponent,
        NewGameComponent,
        ScoreBoardComponent,
        GameOverComponent,
        TileComponent
      ],
      providers: [ScoreboardService, PlayingFieldService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
