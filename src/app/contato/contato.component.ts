import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';
import { Email } from '../model/Email';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {


  email: Email = new Email;


  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  sendEmail() {
    this.emailService.enviarEmail(this.email).subscribe((data: Email) => {
      this.email = data
      location.assign('/contato')
    })
  }

}
