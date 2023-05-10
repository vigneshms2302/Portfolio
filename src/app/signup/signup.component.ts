import { Renderer2, ElementRef  } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm!: FormGroup;
  submitted = false;
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  address = '';
  dateOfBirth: Date | null = null;
  gender = '';
  country = '';
  phone = '';
  acceptTerms = false;
  confirmRegistration = false;
  hidePassword=true;
  hideConfirmPassword=true;
  showClickableIcon = false;
  street ='';
  city ='';
  state ='';
  zip ='';
  
  
 
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  onMouseEnter() {
    this.showClickableIcon = true;
    this.renderer.addClass(this.el.nativeElement, 'clickable-icon');
  }

  onMouseLeave() {
    // let name='check';
    // console.log("name",this.name)
    this.showClickableIcon = false;
    this.renderer.removeClass(this.el.nativeElement, 'clickable-icon');
  }
  onCountrySelectionChange(event: any) {
   
    console.log('Selected country:', event.value);
  }
  onNameBlur() {
    if (this.name.length > 0) {
      console.log('Name:',this.name);
    }
  }
  onEmailBlur() {
    if (this.email.length > 0) {
      console.log('Email:',this.email);
    }
  }
  
  onPasswordBlur() {
    if (this.password.length > 0) {
      console.log('Password:',this.password);
    }
  }
  onConfirmPasswordBlur() {
    if (this.confirmPassword.length > 0) {
      console.log('Confirm Password:',this.confirmPassword);
    }
  }
  onAddressBlur() {
    if (this.address.length > 0) {
      console.log('Address:',this.address);
    }
  }
  onDateChange(event: any) {
    console.log('Date of birth changed:', event.value);
    
  }
  onPhoneInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const phone = input.value;
    console.log('Phone number changed:', phone);
    // Do any other necessary processing with the phone number input here
  }
 
  onGenderChange() {
    console.log('Gender changed:', this.gender);
    
  }
  onCheckboxChange() {
    if (this.acceptTerms) {
      console.log('terms and conditions : checked');
    } else {
      console.log('terms and conditions : unchecked');
    }
  }
  
  // onNameInputChange(event: any) {
  //   console.log(event.target.value);
  // }
  
  register() {
    let message = `Name: ${this.name}\nEmail: ${this.email}\nPassword: ${this.password}\nAddress: ${this.address}\nStreet: ${this.street}\n City: ${this.city} \n State: ${this.state}\n ZipCode: ${this.zip}\nDate of Birth: ${this.dateOfBirth}\nGender: ${this.gender}\nCountry: ${this.country}\nPhone: ${this.phone}\nAccept Terms: ${this.acceptTerms}`;
    
      console.log('Register button clicked!');
     
       if (confirm(message)) {
      window.alert(`${this.name} Registered successfully`);
    
    } else {
      // Handle clear button click
    }
  }
  
}






// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//   name: string = '';
//   email: string = '';
//   password: string = '';
//   confirmPassword: string = '';
//   address: string = '';
//   dateOfBirth: Date = new Date();
//   gender: string = '';
//   country: string = '';
//   phoneNo: string = '';
//   terms: boolean = false;

//   constructor() { }

//   ngOnInit(): void {
//   }
//   onSubmit() {
//         window.alert(`${this.name} logged in successfully`);
      
   
//     }
//   }




  // onRegisterClick() {
  //   const userDetails = `Name: ${this.name}\nEmail: ${this.email}\nPassword: ${this.password}\nConfirm Password: ${this.confirmPassword}\nAddress: ${this.address}\nDate of Birth: ${this.dateOfBirth}\nGender: ${this.gender}\nCountry: ${this.country}\nPhone: ${this.phoneNo}`;
  //   alert(userDetails);
  // }
  


// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {
//   form: FormGroup;
//   interests: string[] = ['Sports', 'Movies', 'Music', 'Travel', 'Fitness', 'Photography'];
//   genders: string[] = ['Male', 'Female', 'Other'];

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       dateOfBirth: ['', Validators.required],
//       phoneNumber: ['', Validators.required],
//       address: ['', Validators.required],
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//       confirmPassword: ['', Validators.required],
//       gender: ['', Validators.required],
//       age: ['', Validators.required],
//       interests: [[], Validators.required],
//       termsAndConditions: [false, Validators.requiredTrue],
//     });
//   }

//   submit() {
//     console.log(this.form.value);
//   }
// }

 

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {
//   form: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   submit() {
//     console.log(this.form.value);
//   }
// }



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {

// }



