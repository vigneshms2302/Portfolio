import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

   
// start of component interaction

receivedData: any;

receiveFormData(data: any) {
  this.receivedData = data;
}


  counter = 0;
  isCounterRunning = false;

  startCounter() {
    this.counter = 0;
    this.isCounterRunning = true;
    this.updateCounter();
  }

  stopCounter() {
    this.isCounterRunning = false;
  }

  private updateCounter() {
    if (this.isCounterRunning) {
      setTimeout(() => {
        this.counter++;
        this.updateCounter();
      }, 1000);
    }
  }
 

  myStringValue: string = 'Hello, Contact Component!';
  myNumberValue: number = 42;
  myArrayValue: any[] = [1, 2, 3, 4, 5];
 
  
  message!: string;

  receiveMessage(message: string) {
    this.message = message;
  }

  // receivedData!: string;

  
  
  
// end of component interaction


  successMessage: string;
  dashboardItems = [
    {
      title: 'Project 1',
      // imageUrl: 'download.jpg'
      // ,
     
      // altText: 'Project 1 Image',
      description: 'This is the description for project 1.',
    },
    {
      title: 'Project 2',
      // imageUrl: 'https://via.placeholder.com/400x200',
      // altText: 'Project 2 Image',
      description: 'This is the description for project 2.',
    },
    {
      title: 'Project 3',
      // imageUrl: 'https://via.placeholder.com/400x200',
      // altText: 'Project 3 Image',
      description: 'This is the description for project 3.',
    },
  ];
  constructor(private route: ActivatedRoute,private dialog: MatDialog) {
    this.successMessage = '';
  }

  ngOnInit(): void {
    this.successMessage = history.state.message;
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: {} // add any data you want to pass to the dialog component
    });
  }

}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {

// }
