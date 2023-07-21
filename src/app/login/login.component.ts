import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

interface Row {
  name: string;
  age: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
  {
    
    displayedColumns: string[] = ['name', 'age'];
    dataSource: MatTableDataSource<Row> = new MatTableDataSource<Row>();
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    constructor() { }
  
    ngOnInit(): void {
      this.retrieveData();
    }
  
    retrieveData() {
      // Simulating data retrieval
      setTimeout(() => {
        const data: Row[] = [
          { name: 'John', age: 25 },
          { name: 'Alice', age: 30 },
          // Add more rows here...
        ];
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      }, 1000);
    }
    

  }



  

  let ocean = ['octopus', 'crab'];
  let fish = ['sea fish', 'lake fish'];
  
  let combinedArray = ocean.concat(fish);
  console.log(combinedArray);
  let string = "Welcome to Finsurge";

  let extractedString = string.substring(11);
  console.log(extractedString);
  let strings = "F_I_N S U R_G E";

  let modifiedString = strings.replace(/_/g, '').replace(/\s/g, '');
  console.log(modifiedString);
      


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




