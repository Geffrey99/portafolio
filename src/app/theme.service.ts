import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkTheme = false;

  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
    if (this.darkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }

  isDarkTheme(): boolean {
    return this.darkTheme;
  }
}
