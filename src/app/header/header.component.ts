import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  isChecked = true;
  isDarkTheme = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
