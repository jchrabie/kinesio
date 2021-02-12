import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactBtnComponent } from './contact-btn.component';

describe('ContactBtnComponent', () => {
  let component: ContactBtnComponent;
  let fixture: ComponentFixture<ContactBtnComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ContactBtnComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
