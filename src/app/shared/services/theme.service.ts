import { isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  theme = signal<string>('light'); // الحالة الافتراضية: مفتوح

  constructor() {
    this.checkTheme();

  }

  checkTheme() {
    if (this.isBrowser) {
      const storedTheme = localStorage.getItem('fitness-theme-mode');
      if (storedTheme) {
        this.theme.set(storedTheme);
        document.documentElement.setAttribute('data-theme', storedTheme);


      } else {
        this.theme.set('light'); // القيمة الافتراضية
        document.documentElement.setAttribute('data-theme', 'light');

      }
    }
  }

  toggleTheme() {
    this.theme() === 'light' ? this.darkTheme() : this.lightTheme();
  }

  applyTheme(themeValue:'light' | 'dark') {
    this.theme.set(themeValue);
    if (this.isBrowser) {
      localStorage.setItem('pulse-theme-mode', themeValue);
      document.documentElement.setAttribute('data-theme', themeValue);

    }
  }

  lightTheme() {
    this.applyTheme('light');
  }
  darkTheme() {
    this.applyTheme('dark');
  }
}
