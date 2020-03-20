import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactViewUpdateComponent } from './contact-view-update.component';

describe('ContactViewUpdateComponent', () => {
  let component: ContactViewUpdateComponent;
  let fixture: ComponentFixture<ContactViewUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactViewUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactViewUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
