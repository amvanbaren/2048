import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingFieldComponent } from './playing-field.component';
import { GameOverComponent } from '../game-over/game-over.component';
import { TileComponent } from '../tile/tile.component';
import { ScoreboardService } from '../score-board.service';
import { PlayingFieldService } from '../playing-field.service';

describe('PlayingFieldComponent', () => {
  let component: PlayingFieldComponent;
  let fixture: ComponentFixture<PlayingFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayingFieldComponent, GameOverComponent, TileComponent],
      providers: [ScoreboardService, PlayingFieldService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set gameOver to false when there are tiles that can be merged', () => {
    component.tiles = [
      [670, 702, 814, 228],
      [908, 321, 656, 943],
      [334, 555, 114, 427],
      [718, 328, 2048, 2048]
    ];

    component.moveDown();
    expect(component.gameOver).toEqual(false);
  });

  it('should set gameOver to true when no more moves are possible', () => {
    component.tiles = [
      [670, 702, 814, 228],
      [908, 321, 656, 943],
      [334, 555, 114, 427],
      [718, 328, 515, 888]
    ];

    component.moveDown();
    expect(component.gameOver).toEqual(true);
  });
});
