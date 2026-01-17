import {CommonModule, NgOptimizedImage} from '@angular/common';
import { Component, HostListener, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { TranslatePipe } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../core/auth/services/auth.service';
import { AuthAPIService } from 'authAPI';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ TranslatePipe, RouterModule, NgOptimizedImage,MenuModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  iconTheme: string = 'light';
  items: MenuItem[] | undefined;

  lang: string = 'en';
  isOpen: boolean = false;
  isAuthenticated = localStorage.getItem('fitness_token') !== null;
  @ViewChild('navbar') navbarRef!: ElementRef<HTMLElement>;

  constructor(private _languageService: LanguageService, private _themeService: ThemeService , private _authService: AuthAPIService, private router: Router) {}

  ngOnInit(): void {
    this.lang = this._languageService.language();
    this.iconTheme = this._themeService.theme();
    this.items = [
            {
                items: [
                    {
                        label: 'Refresh',
                        icon: 'fa-solid fa-arrows-rotate'
                    },
                    {
                        label: 'Logout',
                        icon: 'fa-solid fa-right-from-bracket',
                        command: () => {
                            this.logOut();
                        }
                    }
                ]
            }
        ];
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
  logOut(){
    this._authService.logout().subscribe({
      next: (res) => {
        console.log(res);
        localStorage.removeItem('fitness_token');
        this.router.navigate(['./auth/login']);
        this.isAuthenticated = false;
      }
    })
  }
}
