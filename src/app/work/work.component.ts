import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  day: string = 'Monday';
  x: number = 10;
  constructor() {
    switch (this.day) {
      case 'Monday':
        console.log('Today is Monday');
        break;
      case 'Tuesday':
        console.log('Today is Tuesday');
        break;
      case 'Wednesday':
        console.log('Today is Wednesday');
        break;
      default:
        console.log('Today is some other day');
    }
    if (this.x > 5) {
      console.log('x is greater than 5');
    }
    if (this.x > 5) {
      console.log('x is greater than 5');
    } else {
      console.log('x is less than or equal to 5');
    }
  }
}








// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-work',
//   templateUrl: './work.component.html',
//   styleUrls: ['./work.component.css']
// })
// export class WorkComponent {

// }
