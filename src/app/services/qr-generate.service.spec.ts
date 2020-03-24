import { TestBed } from '@angular/core/testing';

import { QrGenerateService } from './qr-generate.service';

describe('QrGenerateService', () => {
  let service: QrGenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrGenerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
