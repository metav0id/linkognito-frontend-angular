import { TestBed } from '@angular/core/testing';

import { ContactViewService } from './contact-view.service';

describe('ContactViewService', () => {
  let service: ContactViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
