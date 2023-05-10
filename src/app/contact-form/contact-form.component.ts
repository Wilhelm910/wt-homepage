import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('buttonField') buttonField!: ElementRef;

  ngOnInit(): void {

  }

  scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let buttonField = this.buttonField.nativeElement;
    this.getInput(nameField, messageField, emailField, buttonField)
    let fd = new FormData();
    fd.append('name', nameField.value)
    fd.append('email', emailField.value)
    fd.append('message', messageField.value)
    await fetch('https://@wilhelm-teicke.developerakademie.net/Kontaktformular_homepage/send_mail.php', {
      method: 'POST',
      body: fd
    })
    this.reactivateInput(nameField, messageField, emailField, buttonField)
  }

  getInput(nameField:any, messageField:any, emailField:any, buttonField:any) {
    nameField.disabled = true;
    messageField.disabled = true;
    emailField.disabled = true;
    buttonField.disabled = true;
  }

  reactivateInput(nameField:any, messageField:any, emailField:any, buttonField:any) {
    nameField.disabled = false;
    messageField.disabled = false;
    emailField.disabled = false;
    buttonField.disabled = false;
    nameField.value = '';
    messageField.value = '';
    emailField.value = '';
  }

}
