import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
@Component({
  selector: 'app-outcome-box',
  templateUrl: './outcome-box.component.html',
  styleUrls: ['./outcome-box.component.css']
})
export class OutcomeBoxComponent implements OnInit {

  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }
  inputText(event: any): void {
    this.formService.outcome = event.target.value;
  }
}
