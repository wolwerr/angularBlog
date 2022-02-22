import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../model/Email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('http://localhost:3000/posts')
  }

  enviarEmail(email: Email) {
    return this.http.post('http://localhost:8083/sending-email/', email)
  }

}
