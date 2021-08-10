import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
@Component({
  selector: 'app-activities-box',
  templateUrl: './activities-box.component.html',
  styleUrls: ['./activities-box.component.css']
})
export class ActivitiesBoxComponent implements OnInit {

  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }
  inputText(event: any): void {
    this.formService.activities = event.target.value;
  }
}
