import { TestBed, inject } from '@angular/core/testing';

import { PlayingFieldService } from './playing-field.service';

describe('PlayingFieldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayingFieldService]
    });
  });

  it('should ...', inject([PlayingFieldService], (service: PlayingFieldService) => {
    expect(service).toBeTruthy();
  }));
});
