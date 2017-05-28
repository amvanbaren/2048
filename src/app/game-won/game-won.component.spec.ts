import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWonComponent } from './game-won.component';

describe('GameWonComponent', () => {
  let component: GameWonComponent;
  let fixture: ComponentFixture<GameWonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameWonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

/*
  // TODO create tests to verify look and feel of game won overlay
  Then a yellow overlay is displayed on top of the playing field
  And on top of the playing field 'You win!' should be displayed
  And below the 'You win!' text a 'New game' button should be displayed
*/
});
