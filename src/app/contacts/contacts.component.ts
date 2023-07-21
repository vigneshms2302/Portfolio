import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  name!: string;
  email!: string;
  message!: string;

  @Input() stringValue!: string;
  @Input() numberValue!: number;
  @Input() arrayValue!: any[];






  @Output() formData = new EventEmitter<any>();
   submitForm() {
    const data = {
      name: this.name,
      email: this.email,
      message: this.message
    };
    this.formData.emit(data);
  }



  
@Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from Contact Component!');
  }


  // submitForm() {
  //   // Here, you can implement your logic to handle the form submission
  //   // For now, we'll just log the form data
  //   console.log('Name:', this.name);
  //   console.log('Email:', this.email);
  //   console.log('Message:', this.message);
  // }
}


