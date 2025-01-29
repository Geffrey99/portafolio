import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './theme.service';
@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portafolio';
  constructor(private themeService: ThemeService) {}
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
  isDarkTheme(): boolean {
    return this.themeService.isDarkTheme();
  }




}
