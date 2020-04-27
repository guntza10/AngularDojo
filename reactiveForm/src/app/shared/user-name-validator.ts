import { AbstractControl } from "@angular/forms";

// ตัวจัดการ custom validation
// function forbiddenNameValidator(control: AbstractControl): { [key: string]: any } | null {
//     const forbidden = /admin/.test(control.value); // เป็นการ check ว่า value containe string admin มั้ย (เป็นการใช้ regx check)
//     const forbidde = control.value.toString().include('admin');
//     return forbidden ? {'forbidden'}
// }