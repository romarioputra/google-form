import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceBoxComponent } from './attendance-box.component';

describe('AttendanceBoxComponent', () => {
  let component: AttendanceBoxComponent;
  let fixture: ComponentFixture<AttendanceBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
