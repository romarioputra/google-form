import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NameBoxComponent } from './components/name-box/name-box.component';
import { AttendanceBoxComponent } from './components/attendance-box/attendance-box.component';
import { ActivitiesBoxComponent } from './components/activities-box/activities-box.component';
import { OutcomeBoxComponent } from './components/outcome-box/outcome-box.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NameBoxComponent,
    AttendanceBoxComponent,
    ActivitiesBoxComponent,
    OutcomeBoxComponent,
    ButtonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
