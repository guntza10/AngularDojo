import { Component } from '@angular/core';
import { User } from 'src/models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Form';
  topics = ['Angular', 'React', 'VueJs'];

  userModel = new User('Gun', 'guntza22@hotmail.com', '08451675125', 'angular', 'morning', true);
}
