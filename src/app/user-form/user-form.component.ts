import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() saveUser = new EventEmitter<any>();

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit(): void {
    if (this.userForm.valid) {
      const user = {
        name: this.userForm.get('name')?.value,
        username: this.userForm.get('username')?.value,
        email: this.userForm.get('email')?.value
      };

      this.saveUser.emit(user);
      this.userForm.reset();
    }
  }
}

