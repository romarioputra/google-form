import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import {Intern} from '../../Intern'
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const intern: Intern = {
      name: 'n',
      attendance: 'n',
      activities: 'n',
      outcome: 'n'
    }
    // console.log(intern);
    this.formService.addLog(intern).subscribe(log => console.log(log));
    // window.location.reload();
  }
} 
