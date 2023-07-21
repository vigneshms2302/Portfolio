import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  projects: Project[] = [
    { name: 'Project A', date: new Date('2022-01-15') },
    { name: 'Project C', date: new Date('2021-12-10') },
    { name: 'Project B', date: new Date('2022-02-05') },
    { name: 'Project D', date: new Date('2022-03-20') }
  ];
  selectedSortOption!: string;

  sortProjects() {
    if (this.selectedSortOption === 'name') {
      this.projects.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.selectedSortOption === 'date') {
      this.projects.sort((a, b) => a.date.getTime() - b.date.getTime());
    }
  }




  project = {
    category: 'Web Development',
    title: 'Angular Portfolio Site',
    startDate: new Date('2023-01-01')
  };

  product = {
    price: 99.99
  };

  technologyStack = ['Angular', 'HTML', 'CSS', 'JavaScript'];

  progress = 0.75;

  numberOfProjects = 10;

  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor nunc eget tortor tempus, et convallis ex ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';


//   day: string = 'Monday';
//   x: number = 10;
//   constructor() {
//     switch (this.day) {
//       case 'Monday':
//         console.log('Today is Monday');
//         break;
//       case 'Tuesday':
//         console.log('Today is Tuesday');
//         break;
//       case 'Wednesday':
//         console.log('Today is Wednesday');
//         break;
//       default:
//         console.log('Today is some other day');
//     }
//     if (this.x > 5) {
//       console.log('x is greater than 5');
//     }
//     if (this.x > 5) {
//       console.log('x is greater than 5');
//     } else {
//       console.log('x is less than or equal to 5');
//     }
//   }
// }



}

interface Project {
  name: string;
  date: Date;
}





// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-work',
//   templateUrl: './work.component.html',
//   styleUrls: ['./work.component.css']
// })
// export class WorkComponent {

// }
