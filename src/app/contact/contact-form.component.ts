import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'teatown-contact-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm = this.formBuilder.group({
    email: [null, [Validators.required]],
    name: [null, [Validators.required]],
    message: [null, [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder) {
  }
}
