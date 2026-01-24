import { Component } from '@angular/core';
import { MainComponent } from "./components/main/main.component";
import {AboutComponent} from '../about/about.component';
import {BestWayComponent} from './components/best-way/best-way.component';
import { ClassesHomeComponent } from "./components/classes-home/classes-home.component";
import { HealthyHomeComponent } from "./components/healthy-home/healthy-home.component";
import {NewsBarComponent} from '../../../shared/components/news-bar/news-bar.component';

@Component({
  selector: 'app-home',
  imports: [MainComponent, AboutComponent, BestWayComponent, ClassesHomeComponent, HealthyHomeComponent, NewsBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
