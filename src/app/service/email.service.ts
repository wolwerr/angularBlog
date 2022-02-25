import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../model/Email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

private baseUrl = 'https://backspaemail.herokuapp.com/sending-email';



enviarEmail(email: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, email);
  }

}
