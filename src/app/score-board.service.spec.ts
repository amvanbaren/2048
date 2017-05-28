import { TestBed, inject } from '@angular/core/testing';

import { ScoreboardService } from './score-board.service';

describe('ScoreboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreboardService]
    });
  });

  it('should ...', inject([ScoreboardService], (service: ScoreboardService) => {
    expect(service).toBeTruthy();
  }));
});
