# Angular

## structure

>### `1.module`
> คือ class ที่มี @NgModule decorator ประกาศบอกไว้ เป็น class ที่รวบรวมพวก component,directive,pipes,service ที่เกี่ยวข้องเอาไว้ด้วยกัน \
> `Note : ` Angular app มี `app.module.ts` เป็น `root module` ที่เป็น module หลัก และ Angular app สามารถมีได้หลาย module 
>
> ![module](PictureAngular/ng1.png)
>
> ใน `@NgModule` decorator จะมี metadata ดังนี้
> - `declarations` => เอาไว้ define components , directives , pipes ที่ต้องการจะใช้ใน Angular app
> - `imports` => เอาไว้ import module อื่นๆเข้ามาใช้กับ Angular app
> - `providers` => เอาไว้ register service ด้วย dependency injection ที่จะเอามาใช้กับ Angular app เพื่อให้ class อื่นสามารถเรียกใช้ได้ `(ใน version ปัจจุบันไม่ต้อง inject service แล้ว)`
> - `bootstrap` => เป็นตัวเริ่มการทำงาน(`render view`)ของ `app.component.ts` (root component) ที่เป็นศูนย์รวมของ view อื่นๆภายใน Angular app `(มีแค่ root module เท่านั้นที่จะทำการ bootstrap ให้กับ root component)`
> - `export` => export class หรือ ตัวแปรให้ class อื่นๆเรียกใช้ได้

>### `2.Package.json`
> คือ ที่ๆบอกว่า Angular app เราใช้ library , module อะไรบ้าง ทุกครั้งที่เราสร้าง project Angular ขึ้นมาใหม่มันจะ install module พื้นฐานที่จำเป็นซึ่งสามารถมาดูได้ที่นี่ เช่น node_module เป็นต้น

>### `3.src folder`
> - `main.ts` => เป็น entry point ของ Angular app (app.module ถูก export มาใช้ที่นี่)
> - `index.html` => เป็น main template เป็นโครง view หลักของ Angular app `(โดย root component จะอยู่ภายใต้ index.html นี้)`
> - `app folder` => เป็น folder ของ app.module `(root module)` และ app.componet `(root component)` กับ พวก `component` , `service` อื่นๆ

>### `4.Component`
> `Note :` decorator function คือ function ที่เอาไว้ระบุ class ว่าเป็น regular class `(class ธรรมดา)` หรือ particular class `(class เฉพาะ)` ซึ่งใน decorator นี้จะมี Metadata เป็น property ข้อมูล 
>
> คือ class ที่มี `@Component` decorator ประกาศบอกไว้ ทำหน้าที่เกี่ยวกับการทำงานกับ view และแบ่งการทำงานออกเป็น 2 ส่วน คือ ส่วนการทำงานของ `view(.html)` , `logic(.ts)`
>
> ![component](PictureAngular/ng2.png)
>
> ใน `@Component` decorator จะมี metadata ดังนี้
> - `selector` => กำหนดชื่อให้กับ component ที่เราจะเอาไปใช้กับ view อื่นๆ สามารถ ประกาศได้ 3 แบบ \
> => `tag` -> `selector: 'app-test'`\
> => `class css` -> `selector: '.app-test'` \
> => `attribute` -> `selector: '[app-test]'`\ 
>
> ![selector](PictureAngular/ng3.png)
> - `templateUrl` => เอาไว้อ้างอิงไฟล์ html \
> `Note :` สามารถใช้ template ที่เอาไว้อ้างอิงถึง html ได้โดยตรง โดยเขียน html ลงไปใน metadata template ได้เลย
> - `styleUrls` => เอาไว้อ้างอิงไฟล์ css \
> `Note :` สามารถใช้ styles ที่เอาไว้อ้างอิงถึง css ได้โดยตรง โดยเขียน css ลงไปใน metadata styles ได้เลย

> ### `5.Service`
> คือ class ที่มี `@Injectable` decorator ประกาศบอกไว้ ที่เอาไว้จัดการเกี่ยวกับการ share data , call api , เชื่อมต่อกับ database หรือ server \
> `Note : ` `@Injectable` decorator เป็นตัวบอกว่า class นี้เป็น service และสามารถใช้ dependency injection ได้ โดยใน `@Injectable` จะมี Metadata providedIn: "root" เป็นการบอกว่าเป็น provide ในตัวเอง สามารถเรียกใช้ service นี้ได้เลย โดยไม่ต้องไป inject ใส่ใน providers ของ root module แล้ว
