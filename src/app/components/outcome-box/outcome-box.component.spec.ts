import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeBoxComponent } from './outcome-box.component';

describe('OutcomeBoxComponent', () => {
  let component: OutcomeBoxComponent;
  let fixture: ComponentFixture<OutcomeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutcomeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcomeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
