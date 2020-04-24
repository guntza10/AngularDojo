import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Reactive Form';
  // สร้าง Form model
  registrationForm = new FormGroup({
    userName: new FormControl('Akuma'),
    passWord: new FormControl(''),
    confirmPassword: new FormControl('')
  });

}
