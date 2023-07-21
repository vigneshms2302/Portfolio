import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isChecked = true;
  public isDarkTheme: boolean = true; // Set initial value to true for dark theme

  constructor(private themeService: ThemeService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    this.themeService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });

    this.themeService.toggleTheme(); // Toggle the theme initially
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.toggleTheme();
  }
  logout():void{
    
  }
}











// import { Component } from '@angular/core';
// import { ThemeService } from '../theme.service';
// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   isMenuOpen = false;
//   isChecked = true;
//   // isDarkTheme = false;

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }
//   public isDarkTheme: boolean = false;

//   constructor(private themeService: ThemeService) {}

//   ngOnInit(): void {
//     this.themeService.isDarkTheme$.subscribe((isDarkTheme: boolean) => {
//       this.isDarkTheme = isDarkTheme;
//     });
    
//   }

// toggleTheme() {
//   this.themeService.toggleTheme();
// }

// }
