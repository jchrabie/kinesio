import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinesiologieComponent } from './kinesiologie.component';

describe('KinesiologieComponent', () => {
  let component: KinesiologieComponent;
  let fixture: ComponentFixture<KinesiologieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinesiologieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinesiologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
