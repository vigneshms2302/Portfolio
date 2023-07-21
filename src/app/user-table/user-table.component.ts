import { Component, OnInit } from '@angular/core';
import { ApiService } from './user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  users: any[] = [];
  newUser: any = {};
  newUserForm!: FormGroup;
  editingUser: any = null;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.apiService.getUsers().subscribe(users => {
      this.users = users.map(user => ({ ...user, editing: false, updatedName: user.name, updatedEmail: user.email }));
    });
  }

  addUser(userForm: NgForm): void {
    if (userForm.valid) {
      this.apiService.createUser(this.newUser).subscribe(newUser => {
        this.users.push({ ...newUser, editing: false, updatedName: newUser.name, updatedEmail: newUser.email });
        this.newUser = {};
        userForm.resetForm();
      });
    }
  }
//   editUser(user: any): void {
//     user.editing = true;
//   }
  

//   updateUser(user: any): void {
//     const updatedUser = { name: user.updatedName, email: user.updatedEmail };
//     this.apiService.updateUser(user.id, updatedUser).subscribe(() => {
//       user.name = user.updatedName;
//       user.email = user.updatedEmail;
//       user.editing = false;
//     });
//   }

editUser(user: any): void {
    user.editing = true;
    user.updatedName = user.name; 
    user.updatedEmail = user.email; 
  }
  
  updateUser(user: any): void {
    const updatedUser = { name: user.updatedName, email: user.updatedEmail };
    this.apiService.updateUser(user.id, updatedUser).subscribe(() => {
      user.name = user.updatedName;
      user.email = user.updatedEmail;
      user.editing = false;
    });
  }
  

  deleteUser(userId: number): void {
    this.apiService.deleteUser(userId).subscribe(() => {
      this.users = this.users.filter(user => user.id !== userId);
    });
  }
}







// import { Component, OnInit } from '@angular/core';
// import { ApiService } from './user.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-user-table',
//   templateUrl: './user-table.component.html',
//   styleUrls: ['./user-table.component.css']
// })
// export class UserTableComponent implements OnInit {
//   users: any[] = [];
//   newUserForm!: FormGroup;
//   editingUser: any = null;

//   constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

//   ngOnInit(): void {
//     this.getUsers();
//     this.buildForm();
//   }

//   getUsers(): void {
//     this.apiService.getUsers().subscribe(users => {
//       this.users = users;
//     });
//   }

//   buildForm(): void {
//     this.newUserForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//     });
//   }

//   get name() {
//     return this.newUserForm.get('name');
//   }

//   get email() {
//     return this.newUserForm.get('email');
//   }

//   addUser(): void {
//     if (this.newUserForm.valid) {
//       const newUser = {
//         name: this.name?.value,
//         email: this.email?.value
//       };

//       this.apiService.createUser(newUser).subscribe(
//         createdUser => {
//           this.users.push(createdUser);
//           this.newUserForm.reset();
//         },
//         error => {
//           console.error('Error adding user:', error);
//         }
//       );
//     }
//   }

//   editUser(user: any): void {
//     user.editing = true;
//   }

//   cancelEdit(): void {
//     this.editingUser = null;
//   }

//   updateUser(user: any): void {
//     const updatedUser = { name: user.updatedName, email: user.updatedEmail };
//     this.apiService.updateUser(user.id, updatedUser).subscribe(() => {
//       user.name = user.updatedName;
//       user.email = user.updatedEmail;
//       this.editingUser = null;
//     });
//   }

//   deleteUser(userId: number): void {
//     this.apiService.deleteUser(userId).subscribe(() => {
//       this.users = this.users.filter(user => user.id !== userId);
//     });
//   }
// }






// import { Component, OnInit } from '@angular/core';
// import { ApiService } from './user.service';

// @Component({
//   selector: 'app-user-table',
//   templateUrl: './user-table.component.html',
//   styleUrls: ['./user-table.component.css']
// })
// export class UserTableComponent implements OnInit {
//   users: any[] = [];
//   newUser: any = {};

//   constructor(private apiService: ApiService) { }

//   ngOnInit(): void {
//     this.getUsers();
//   }

//   getUsers(): void {
//     this.apiService.getUsers().subscribe(users => {
//       this.users = users.map(user => ({ ...user, editing: false, updatedName: user.name, updatedEmail: user.email }));
//     });
//   }

//   addUser(): void {
//     if (this.newUser.name && this.newUser.email) {
//       console.log('Adding user:', this.newUser);
//       this.apiService.createUser(this.newUser).subscribe(
//         newUser => {
//           console.log('New user added:', newUser);
//           this.users.push(newUser);
//           this.newUser = {};
//         },
//         error => {
//           console.error('Error adding user:', error);
//         }
//       );
//     } else {
//       console.log('Invalid user details');
//     }
//   }
//   editUser(user: any): void {
//     user.editing = true;
//   }

//   updateUser(user: any): void {
//     const updatedUser = { name: user.updatedName, email: user.updatedEmail };
//     this.apiService.updateUser(user.id, updatedUser).subscribe(() => {
//       user.name = user.updatedName;
//       user.email = user.updatedEmail;
//       user.editing = false;
//     });
//   }

//   deleteUser(userId: number): void {
//     this.apiService.deleteUser(userId).subscribe(() => {
//       this.users = this.users.filter(user => user.id !== userId);
//     });
//   }
// }










// import { Component, OnInit } from '@angular/core';
// import { UserService } from './user.service';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatDialog } from '@angular/material/dialog';
// import { User } from './user.model';
// import { UserFormComponent } from '../user-form/user-form.component';

// @Component({
//   selector: 'app-user-table',
//   templateUrl: './user-table.component.html',
//   styleUrls: ['./user-table.component.css']
// })
// export class UserTableComponent implements OnInit {
//   displayedColumns: string[] = ['id', 'name', 'username', 'email', 'actions'];
//   dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();

//   constructor(private userService: UserService, private dialog: MatDialog) { }

//   ngOnInit(): void {
//     this.loadUsers();
//   }

//   loadUsers(): void {
//     this.userService.getUsers().subscribe(
//       users => {
//         this.dataSource.data = users;
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   }

//   deleteUser(id: number): void {
//     if (confirm('Are you sure you want to delete this user?')) {
//       this.userService.deleteUser(id).subscribe(
//         () => {
//           // Remove the deleted user from the table
//           const index = this.dataSource.data.findIndex(user => user.id === id);
//           if (index !== -1) {
//             this.dataSource.data.splice(index, 1);
//             this.dataSource._updateChangeSubscription();
//           }
//         },
//         error => {
//           console.log(error);
//         }
//       );
//     }
//   }

//   editUser(user: User): void {
//     const dialogRef = this.dialog.open(UserFormComponent, {
//       width: '400px',
//       data: {
//         title: 'Edit User',
//         user: { ...user }
//       }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.userService.updateUser(result).subscribe(
//           updatedUser => {
//             // Update the user in the table
//             const index = this.dataSource.data.findIndex(u => u.id === updatedUser.id);
//             if (index !== -1) {
//               this.dataSource.data[index] = updatedUser;
//               this.dataSource._updateChangeSubscription();
//             }
//           },
//           error => {
//             console.log(error);
//           }
//         );
//       }
//     });
//   }

//   createUser(): void {
//     const dialogRef = this.dialog.open(UserFormComponent, {
//       width: '400px',
//       data: {
//         title: 'Create User'
//       }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.userService.createUser(result).subscribe(
//           newUser => {
//             // Add the new user to the table
//             this.dataSource.data.push(newUser);
//             this.dataSource._updateChangeSubscription();
//           },
//           error => {
//             console.log(error);
//           }
//         );
//       }
//     });
//   }
// }
