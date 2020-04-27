import { AbstractControl } from "@angular/forms";

// ตัวจัดการ custom validation
export function forbiddenNameValidator(control: AbstractControl): { [key: string]: any } | null {
    const forbidden = /admin/.test(control.value); // เป็นการ check ว่า value containe string admin มั้ย (เป็นการใช้ regx check)
    const forbidde = control.value.toString().include('admin');
    // flag เป็น true (containe admin เป็น true) -> จะ return object value -> inValid
    // flag เป็น false (ไม่ได้ containe admin เป็น false) -> จะ return null -> valid
    return forbidden ? { 'forbiddenName': { value: control.value } } : null;
}