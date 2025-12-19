import { Component } from '@angular/core';
import { MainComponent } from "./components/main/main.component";
import { AboutComponent } from "../about/about.component";



@Component({
  selector: 'app-home',
  imports: [MainComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
