import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidatorHardCode, forbiddenNameValidator } from './shared/user-name-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Reactive Form';
  // // สร้าง Form model (basic formGroup,formControl)
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Akuma'),
  //   passWord: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   // formGroup ซ้อนอยู่ใน formGroup (nested form group)
  //   address: new FormGroup({
  //     City: new FormControl(''),
  //     State: new FormControl(''),
  //     PostalCode: new FormControl('')
  //   })
  // });

  constructor(private fb: FormBuilder) { }

  // ใช้ FormBuilder service
  registrationForm = this.fb.group({
    // userName: ['', [Validators.required, forbiddenNameValidatorHardCode]], // hard code
    userName: ['', [Validators.required, forbiddenNameValidator(/admin/)]], // ส่ง Parameter ในรูปแบบ RegX
    passWord: ['', [Validators.required, Validators.minLength(5)]],
    confirmPassword: [''],
    address: this.fb.group({
      City: [''],
      State: [''],
      PostalCode: ['']
    })
  });

  // จัดการ form control value 
  loadApiData() {
    // set ให้ทุก field
    this.registrationForm.setValue({
      userName: 'Agito',
      passWord: 'test',
      confirmPassword: 'test',
      address: {
        City: 'Tokyo',
        State: 'shiba',
        PostalCode: '100010'
      }
    });
    // set ให้แค่บาง field
    // this.registrationForm.patchValue({
    //   userName: 'Agito',
    //   passWord: 'test',
    //   confirmPassword: 'test',
    // })
  }

  // ทำเป็น Method เพื่อ get field
  passWord() {
    return this.registrationForm.get('passWord');
  }
}