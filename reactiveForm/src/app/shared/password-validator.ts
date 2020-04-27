import { AbstractControl } from '@angular/forms';

export function passwordValidator(control: AbstractControl): { [key: string]: any } | null {
    const password = control.get('passWord');
    const confirmPassword = control.get('confirmPassword'); 
    // ถ้า password กับ confirm password ยังไม่มีการเปลี่ยนแปลง
    if(password.pristine || confirmPassword.pristine) {
        return null; // ยังไม่มีการ check ว่า Match ไม่ Match ก็ให้มันไม่มีค่าไปก่อนเป็น default
    }

    // check ว่า field password กับ confirmPassword มีมั้ย ถ้ามีแล้วมันไม่เท่ากัน จะ return custom validator (มัน invalid)
    // check ว่า field password กับ confirmPassword มีมั้ย ถ้ามีแล้วมันเท่ากัน จะ return null (มัน valid)
    return password && confirmPassword && password.value != confirmPassword.value ?
        { 'notMatch': true } // custom validator ที่มี property noMatch เป็น true เป็น flag บอกว่ามันไม่ match
        : null; 
}