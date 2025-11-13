import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
    private readonly platformId = inject(PLATFORM_ID);
    private readonly isBrowser = isPlatformBrowser(this.platformId);
    private translate = inject(TranslateService);

    language = signal<string>('en'); // الحالة الافتراضية: مفتوح

    constructor() {
      this.checkLanguage();
    }

    /* Change language */
    checkLanguage() {
      if (this.isBrowser) {
        const storedLang = localStorage.getItem('langRtl');

        if (storedLang) {
          this.language.set(storedLang);
          const dir = storedLang === 'ar' ? 'rtl' : 'ltr';
          document.querySelector('html')?.setAttribute('dir', dir);
          document.querySelector('html')?.setAttribute('lang', storedLang);
          this.translate.use(storedLang);


        } else {
          this.language.set('en'); // القيمة الافتراضية
          document.querySelector('html')?.setAttribute('dir', 'ltr');
          document.querySelector('html')?.setAttribute('lang', 'en');
          this.translate.use('en');

        }
      }
    }

    toggleLanguage(langName?:string) {
      if (this.language() === 'en' || langName === 'ar') {
        this.rtlLang();
      } else {
        this.ltrLang();
      }
    }

    applyLanguage(langValue:'en' | 'ar') {
      this.language.set(langValue);
      if (this.isBrowser) {
        localStorage.setItem('langRtl', langValue);
        const dir = langValue === 'ar' ? 'rtl' : 'ltr';
        document.querySelector('html')?.setAttribute('dir', dir);
        document.querySelector('html')?.setAttribute('lang', langValue);
      }
    }

    rtlLang() {
      this.applyLanguage('ar');
      this.translate.use('ar');
    }

    ltrLang() {
      this.applyLanguage('en');
      this.translate.use('en');
    }
}
