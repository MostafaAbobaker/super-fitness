import { Component } from '@angular/core';
import { MainComponent } from "./components/main/main.component";
import {AboutComponent} from '../about/about.component';
import {BestWayComponent} from './components/best-way/best-way.component';

@Component({
  selector: 'app-home',
  imports: [MainComponent, AboutComponent, BestWayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
