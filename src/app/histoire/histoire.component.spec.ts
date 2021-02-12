import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HistoireComponent } from './histoire.component';

describe('HistoireComponent', () => {
  let component: HistoireComponent;
  let fixture: ComponentFixture<HistoireComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HistoireComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
