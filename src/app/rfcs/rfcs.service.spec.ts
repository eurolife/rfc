/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RFCsService } from './rfcs.service';

describe('RFCsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RFCsService]
    });
  });

  it('should ...', inject([RFCsService], (service: RFCsService) => {
    expect(service).toBeTruthy();
  }));
});
