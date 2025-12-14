import { Component } from '@angular/core';
import { MainComponent } from "./components/main/main.component";
<<<<<<< HEAD
import { AboutComponent } from "../about/about.component";
import { NewsBarComponent } from "../../../shared/components/news-bar/news-bar.component";

@Component({
  selector: 'app-home',
  imports: [MainComponent, AboutComponent, NewsBarComponent],
=======
import {AboutComponent} from '../about/about.component';
import {BestWayComponent} from './components/best-way/best-way.component';

@Component({
  selector: 'app-home',
  imports: [MainComponent, AboutComponent, BestWayComponent],
>>>>>>> origin/master
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
