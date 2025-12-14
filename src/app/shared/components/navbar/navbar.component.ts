import {CommonModule, NgOptimizedImage} from '@angular/common';
import { Component, HostListener, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { TranslatePipe } from '@ngx-translate/core';
<<<<<<< HEAD
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,TranslatePipe, RouterLink],
=======
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RouterLink, RouterLinkActive, NgOptimizedImage],
>>>>>>> origin/master
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  iconTheme: string = 'light';
  lang: string = 'en';
  isOpen: boolean = false;

  @ViewChild('navbar') navbarRef!: ElementRef<HTMLElement>;

  constructor(private _languageService: LanguageService, private _themeService: ThemeService) {}

  ngOnInit(): void {
    this.lang = this._languageService.language();
    this.iconTheme = this._themeService.theme();
  }

  ngAfterViewInit(): void {
    this.updateNavbarBackground(window.scrollY);
  }

  toggleDirection(langName: string): void {
    this._languageService.toggleLanguage(langName);
    this.lang = this._languageService.language();
  }

  toggleTheme(): void {
    this._themeService.toggleTheme();
    this.iconTheme = this._themeService.theme();
    console.log(this.iconTheme);
  }

  isMenuOpen(): void {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateNavbarBackground(window.scrollY);
  }

  private updateNavbarBackground(scrollY: number) {
    if (!this.navbarRef) return;

    const nav = this.navbarRef.nativeElement;

    if (scrollY > window.innerHeight) {
      nav.classList.remove('bg-transparent', 'dark:bg-transparent');
      nav.classList.add('bg-[#F3F3F4]', 'dark:bg-[var(--secondary-color)]');
    } else {
      nav.classList.remove('bg-[#F3F3F4]', 'dark:bg-[var(--secondary-color)]');
      nav.classList.add('bg-transparent', 'dark:bg-transparent');
    }
  }
}
