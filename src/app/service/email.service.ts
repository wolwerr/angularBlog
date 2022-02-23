import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../model/Email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }


  enviarEmail(email: Email) {
    return this.http.post('http://localhost:8081/sending-email/', email)
  }

}
