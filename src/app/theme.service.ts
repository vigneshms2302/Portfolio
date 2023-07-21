import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme: string = 'light';
  private isDarkThemeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isDarkTheme$: Observable<boolean> = this.isDarkThemeSubject.asObservable();

  constructor() {}

  public toggleTheme(): void {
    const isDarkTheme = this.isDarkThemeSubject.getValue();
    this.isDarkThemeSubject.next(!isDarkTheme);
  }
  
  getActiveTheme(): string {
    return this.activeTheme;
  }
}
