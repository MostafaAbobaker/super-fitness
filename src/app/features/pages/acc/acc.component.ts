import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';
import { ThemeService } from '../../../shared/services/theme.service';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AccountService } from './services/account.service';
import { AuthAPIService } from 'authAPI';
import { AuthService } from '../../../core/auth/services/auth.service';

@Component({
  selector: 'app-acc',
  imports: [TranslateModule],
  templateUrl: './acc.component.html',
  styleUrl: './acc.component.scss',
})
export class ACCComponent implements OnInit {
  iconTheme: string = 'light';
  lang: string = 'en';
  constructor(
    private accountService: AuthAPIService,
    private _authService: AuthService,
    private _languageService: LanguageService,
    private _themeService: ThemeService,
    private _route: Router
  ) {}
  ngOnInit() {
    this.lang = this._languageService.language();
    this.iconTheme = this._themeService.theme();
  }

  toggleDirection(langName: string) {
    this._languageService.toggleLanguage(langName);
    this.lang = this._languageService.language();
  }

  toggleTheme() {
    this._themeService.toggleTheme();
    this.iconTheme = this._themeService.theme();
    console.log(this.iconTheme);
  }

  logout() {
    this.accountService.logout().subscribe({
      next: () => {
        debugger
        this._authService.isAuthenticated.set(false);
        localStorage.removeItem('fitness_token');
        this._route.navigate(['./auth']);
      },
    });
  }
}
