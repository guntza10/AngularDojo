import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidatorHardCode, forbiddenNameValidator } from './shared/user-name-validator';
import { passwordValidator } from './shared/password-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

  registrationForm: FormGroup;

  // getter ที่ access form array
  get alternativeEmail() {
    // ใส่ type assert ว่าเป็น FormArray  
    return this.registrationForm.get('alternativeEmail') as FormArray;
  }

  // method add dynamic form control to form array
  addAlteranativeEmail() {
    // add form control เปล่าๆ เข้าไปใน form array
    this.alternativeEmail.push(this.fb.control(''));
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // ใช้ FormBuilder service
    this.registrationForm = this.fb.group({
      // userName: ['', [Validators.required, forbiddenNameValidatorHardCode]], // hard code
      userName: ['', [Validators.required, forbiddenNameValidator(/admin/)]], // ส่ง Parameter ในรูปแบบ RegX
      email: [''],
      subscribe: [false],
      passWord: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: [''],
      address: this.fb.group({
        City: [''],
        State: [''],
        PostalCode: ['']
      }),
      // define form array
      alternativeEmail: this.fb.array([])
    }, {
      // set for cross field validation
      validators: passwordValidator
    });

    // valueChanges ของ form control return เป็น observable (ถ้า form control subscribe มีการเปลี่ยนแปลงมันจะเข้ามาทำ call back) -> (Conditional Validation)
    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkValue => { // checkValue คือค่าที่เปลี่ยน (ถ้า filed subscribe มีการเปลี่ยน)
        const email = this.registrationForm.get('email');
        if (checkValue) {
          // set validator ให้กับ form control ได้ (จะ set required เมื่อ subscribe เป็น true)
          email.setValidators(Validators.required);
        } else {
          // clear validator ทั้งหมดที่ set
          email.clearValidators();
        }
        // เป็นการยืนยันการ update value กับ validator ที่่เรา set
        email.updateValueAndValidity();
      });
  }



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

  // ทำเป็น getter method 
  get email() {
    return this.registrationForm.get('email');
  }
}