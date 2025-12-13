import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import {AskMeComponent} from '../../shared/components/ask-me/ask-me.component';

@Component({
  selector: 'app-layout',
  imports: [NavbarComponent, RouterOutlet, FooterComponent, AskMeComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
