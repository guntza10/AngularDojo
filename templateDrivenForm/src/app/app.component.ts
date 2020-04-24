import { Component } from '@angular/core';
import { User } from 'src/models/User';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular Form';
  topics = ['Angular', 'React', 'VueJs'];
  submitted: boolean;
  userModel = new User('Gun', 'guntza22@hotmail.com', '0845167512', 'default', 'morning', true);
  errorMessage: string = '';

  constructor(private _enrollService: EnrollmentService) {

  }

  // select validate
  topicError: boolean = true;

  validateSelect(value) {
    if (value === 'default') {
      // flag
      this.topicError = true;
    }
    else {
      this.topicError = false;
    }
  }

  onSubmit(userForm) {
    console.log(userForm);
    console.log(this.userModel);
    this.submitted = true;

    // this._enrollService.enroll(this.userModel)
    //   .subscribe(
    //     data => console.log('Success', data),
    //     error => console.error('Error', error)
    //   );

    this._enrollService.enroll(this.userModel)
      .subscribe(data => {
        console.log('Success', data);
      }, error => {
        console.error('Error', error);
        // ต้องเปลี่ยนให้ server response กลับมาเป็น 404
        this.errorMessage = error.statusText;
      });
  }
}
