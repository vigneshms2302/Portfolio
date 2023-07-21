import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-management/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];
  userForm!: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initUserForm();
    this.getUsers();
  }

  initUserForm(): void {
    this.userForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required]
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  createUser(): void {
    const user = this.userForm.value;
    this.userService.createUser(user).subscribe(
      (data) => {
        this.users.push(data);
        console.log('User created successfully:', data);
        this.resetUserForm();
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }

  updateUser(): void {
    const user = this.userForm.value;
    const userId = user.id;

    this.userService.updateUser(userId, user).subscribe(
      (data) => {
        const index = this.users.findIndex((u) => u.id === userId);
        if (index !== -1) {
          this.users[index] = data;
          console.log('User updated successfully:', data);
          this.resetUserForm();
        }
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(
      () => {
        this.users = this.users.filter((user) => user.id !== id);
        console.log('User deleted successfully');
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

  resetUserForm(): void {
    this.userForm.reset();
  }
}
