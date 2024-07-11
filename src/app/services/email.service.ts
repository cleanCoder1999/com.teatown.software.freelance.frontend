import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emailUrl = 'http://localhost:3000/submit'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  sendContactToEmailInbox(name: string, email: string, message: string) {
    const contactData = {
      name: name,
      email: email,
      message: message
    };
    return this.http.post<string | void>(this.emailUrl, contactData);
  }
}
