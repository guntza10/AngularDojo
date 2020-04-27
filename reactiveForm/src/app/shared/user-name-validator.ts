import { AbstractControl, ValidatorFn } from "@angular/forms";

// ตัวจัดการ custom validation

// hard code (ไม่นิยมทำ)
export function forbiddenNameValidatorHardCode(control: AbstractControl): { [key: string]: any } | null {
    const forbidden = /admin/.test(control.value); // เป็นการ check ว่า value containe string admin มั้ย (เป็นการใช้ regx check)
    // flag เป็น true (containe admin เป็น true) -> จะ return object value -> inValid
    // flag เป็น false (ไม่ได้ containe admin เป็น false) -> จะ return null -> valid
    return forbidden ? { 'forbiddenName': { value: control.value } } : null; // ขื่อ 'forbiddenName' เป็นชื่อของ custom validator 
}

// custom validator ผ่าน parameter (good practice ควรทำแบบนี้)
// เป็นการ set คำที่ไม่อนุญาตให้ใช้ โดยส่ง parameter string คำนั้นเข้ามา(เป็น RegX) แล้วเอามาเช็คต่อเพียงแต่วิธีนี้เราจะ set อะไรก็ได้แค่ส่ง parameter string คำนั้นเข้ามา
export function forbiddenNameValidator(forbiddenName : RegExp) : ValidatorFn {
    return (control: AbstractControl) : { [key: string]: any } | null => {
        const forbidden = forbiddenName.test(control.value); 
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}