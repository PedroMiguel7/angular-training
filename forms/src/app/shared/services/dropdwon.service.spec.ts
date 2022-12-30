import { TestBed } from '@angular/core/testing';

import { DropdwonService } from './dropdwon.service';

describe('DropdwonService', () => {
  let service: DropdwonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdwonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
