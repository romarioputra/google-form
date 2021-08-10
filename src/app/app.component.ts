import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'google-form';

  ngOnInit() {
    //create observable that emits click events
const source = fromEvent(document, 'click').pipe(map(event => `Event time: ${event.timeStamp}`)).subscribe(val => console.log(val));

  }
}
