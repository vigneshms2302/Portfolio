import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'] // Update the CSS file path
})
export class AboutComponent implements OnInit {
  activeTheme!: string;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.activeTheme = this.themeService.getActiveTheme();

    this.themeService.isDarkTheme$.subscribe(isDarkTheme => {
      this.activeTheme = isDarkTheme ? 'dark' : 'light';
      console.log('Active Theme:', this.activeTheme);
    });
  }

  isLightTheme(): boolean {
    return this.activeTheme === 'light';
  }

  isDarkTheme(): boolean {
    return this.activeTheme === 'dark';
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

}




// import { Component, OnInit } from '@angular/core';
// import { ThemeService } from '../theme.service';

// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.css']
// })
// export class AboutComponent implements OnInit {
//   activeTheme!: string;

//   constructor(private themeService: ThemeService) {}

//   ngOnInit(): void {
//     this.activeTheme = this.themeService.getActiveTheme();

//     this.themeService.isDarkTheme$.subscribe(isDarkTheme => {
//       this.activeTheme = isDarkTheme ? 'dark' : 'light';
//       console.log('Active Theme:', this.activeTheme);
//     });
//   }

//   isLightTheme(): boolean {
//     return this.activeTheme === 'light';
//   }

//   isDarkTheme(): boolean {
//     return this.activeTheme === 'dark';
//   }

// }






