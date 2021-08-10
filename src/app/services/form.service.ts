import { Injectable } from '@angular/core';
import {Intern} from '../Intern'
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  name: string = '';
  attendance: string = '';
  activities: string = '';
  outcome: string = '';
  apiUrl: string = 'http://localhost:5000/logs';
  constructor(private http: HttpClient) { }
  
  addLog(intern: Intern): Observable<Intern[]> {
    return this.http.post<Intern[]>(this.apiUrl, intern);
  }
}
