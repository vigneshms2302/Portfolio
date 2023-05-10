import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
@Component({
  selector: 'app-signups',
  templateUrl: './signups.component.html',
  styleUrls: ['./signups.component.css']
})
export class SignupsComponent  {
  submitted = false;
  countries = ['USA', 'Canada', 'Mexico', 'Japan', 'China', 'India', 'Brazil'];
  registrationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    password: ['', [Validators.required, Validators.maxLength(8)]],
    confirmPassword: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    country: ['', Validators.required],
    gender: ['', Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],

  },
  {
    validator: this.passwordsMatchValidator
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrationForm.value));
  }

  passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
  
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
  }
  
}
