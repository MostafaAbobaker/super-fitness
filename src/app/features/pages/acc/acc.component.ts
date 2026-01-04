import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';
import { ThemeService } from '../../../shared/services/theme.service';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

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
    localStorage.clear();
    this._route.navigate(['/login']);
  }
}
