import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,TranslatePipe, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  iconTheme:string='light';
  lang:string='en';


  constructor(private _languageService:LanguageService, private _themeService:ThemeService ) {

  }
  ngOnInit() {
    this.lang=this._languageService.language();
    this.iconTheme=this._themeService.theme();

  }



  toggleDirection( langName:string ) {
    this._languageService.toggleLanguage(langName);
    this.lang=this._languageService.language();
  }

  toggleTheme() {

    this._themeService.toggleTheme();
    this.iconTheme=this._themeService.theme();
    console.log(this.iconTheme);

  }
}
