import { Component } from '@angular/core';


import {TranslateService } from "@ngx-translate/core";
import translationsEN from "../assets/i18n/en.json";
import translationsAR from "../assets/i18n/ar.json";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
constructor(private translate: TranslateService) {
        translate.setTranslation('en', translationsEN);
        translate.setTranslation('ar', translationsAR);
    }
}
