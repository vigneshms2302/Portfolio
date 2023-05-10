import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private router: Router) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.isValid()) {
      // navigate to home page and display success message
      // alert('alweryhfg')
      //this.router.navigate(['/home'], { state: { message: `${this.username} logged in successfully` } '});
      // console.log(`${this.username} logged in successfully`);

      
      window.alert(`${this.username} logged in successfully`);
      this.router.navigate(['/home'])
   
    }
  }

  isValid() {
    return this.username !== '' && this.password !== '';
  }
}





// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   public loginForm: FormGroup;

//   constructor(private router: Router) {
//     this.loginForm = new FormGroup({});
//   }

//   ngOnInit() {
//     this.loginForm = new FormGroup({
//       username: new FormControl('', [Validators.required]),
//       password: new FormControl('', [Validators.required])
//     });
//   }

//   onSubmit() {
//     if (this.loginForm.valid) {
//       // navigate to home page and display success message
//       this.router.navigate(['/home'], { state: { message: `${this.loginForm.controls['username'].value} logged in successfully` } });
//       console.log(`${this.loginForm.controls['username'].value} logged in successfully`);
//       window.alert(`${this.loginForm.controls['username'].value} logged in successfully`);
//     }
//   }
// }





// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

// @Component({
//     selector: 'app-login',
//     templateUrl: './login.component.html',
//     styleUrls: ['./login.component.css']
//   })
// export class LoginComponent implements OnInit {
//   public loginForm: FormGroup;

//   constructor() {
//     this.loginForm = new FormGroup({});
//   }

//   ngOnInit() {
//     this.loginForm = new FormGroup({
//       username: new FormControl('', [Validators.required]),
//       password: new FormControl('', [Validators.required])
//     });
//   }

//   onSubmit() {
//     if (this.loginForm.valid) {
//       // submit the form
//     }
//   }
// }




