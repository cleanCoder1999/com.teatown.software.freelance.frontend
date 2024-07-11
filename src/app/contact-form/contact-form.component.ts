import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { EmailService } from '../services/email.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid &&
      (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'teatown-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatLabel,
    MatError,
    MatHint,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    name: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });

  errorStateMatcher = new CustomErrorStateMatcher();

  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) {
  }

  get email() {
    return this.contactForm.controls.email;
  }

  get name() {
    return this.contactForm.controls.name;
  }

  get message() {
    return this.contactForm.controls.message;
  }

  onSubmit() {
    if (!this.name.value || !this.email.value || !this.message.value) {
      throw new Error('Submit was not successful. Each form field must be filled.');
    }
    this.emailService.sendContactToEmailInbox(
      this.name.value,
      this.email.value,
      this.message.value
    )
      .subscribe();
  }

  formValuesChanged() {
    return this.email.value !== '' &&
      this.name?.value !== '' &&
      this.message?.value !== '';
  }
}
