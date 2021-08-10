import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
@Component({
  selector: 'app-attendance-box',
  templateUrl: './attendance-box.component.html',
  styleUrls: ['./attendance-box.component.css']
})
export class AttendanceBoxComponent implements OnInit {
  attendances: string[] = [
    'Hadir',
    'Sakit',
    'Izin',
    'Absen'
  ] 
  selectedOption: string = this.attendances[0];
  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }
  selectChangeHandler(event: any) {
    this.formService.attendance = event.target.value;
    console.log(event.target.value)
  }
}
