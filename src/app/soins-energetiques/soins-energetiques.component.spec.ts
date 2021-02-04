import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinsEnergetiquesComponent } from './soins-energetiques.component';

describe('SoinsEnergetiquesComponent', () => {
  let component: SoinsEnergetiquesComponent;
  let fixture: ComponentFixture<SoinsEnergetiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SoinsEnergetiquesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoinsEnergetiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
