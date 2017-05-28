import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOverComponent } from './game-over.component';

describe('GameOverComponent', () => {
  let component: GameOverComponent;
  let fixture: ComponentFixture<GameOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameOverComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

/*
  // TODO move to component unittest
  Then(/^on top of the playing field \'Game over!\' should be displayed$/, () => {

  });

  // TODO move to component unittest
  Then(/^below the \'Game over!\' text a \'Try again\' button should be displayed$/, () => {

  });
*/
});
