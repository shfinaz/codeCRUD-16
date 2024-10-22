import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-16-crud';
}
