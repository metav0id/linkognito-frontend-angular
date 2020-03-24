import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessScannComponent } from './success-scann.component';

describe('SuccessScannComponent', () => {
  let component: SuccessScannComponent;
  let fixture: ComponentFixture<SuccessScannComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessScannComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessScannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
