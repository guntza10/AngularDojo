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

## Binding Data

>### `Interpolation`
> คือ การ binding data จาก `component class` (.ts) สู่ `component template` (.html) 
>
> `syntax => {{ }}`
>
> `Note : ` interpolation มีข้อจำกัดคือไม่สามารถใช้กับ attribute ที่เป็น boolean ได้

>### `Property Binding`
> คือ การ binding data ให้กับ attribute ที่เป็น boolean (`ใช้ binding กับ attribute ได้หมดไม่จำเป็นต้องเป็น boolean`)
>
> `syntax => [attribute] or bind-ชื่อของ attribute`

> ### `Class Binding`
> คือ การ binding ให้กับ class css ว่าจะใช้หรือไม่ใช้ ใช้ `Property binding` 
>
> ![classBinding1](PictureAngular/ng4.png)
>
> ![classBinding2](PictureAngular/ng5.png)
> 
> `หมายเหตุ : โดยที่ IsTextProperty เป็น boolean มีค่าเป็น true , false`
>
> `Note : ` สามารถใช้ attribute ngClass ในการทำ Class binding เพื่อ set ค่าแบบ Object ได้
>
> ![ngClass1](PictureAngular/ng6.png)
>
> ![ngClass2](PictureAngular/ng7.png)
>
> ![ngClass3](PictureAngular/ng8.png)
>
> `หมายเหตุ : โดยที่ IsTextProperty , IsTextStyle เป็น boolean มีค่าเป็น true , false`

> ### `Style Binding`
> คือ การ binding style css property ใช้ `Property binding` รับค่าเป็น string value `("''") or ('""')`
>
> ![styleBinding1](PictureAngular/ng9.png)
>
> `Note : ` สามารถใช้ attribute ngStyle ในการทำ Style binding เพื่อ set ค่าแบบ Object ได้
>
> ![ngStyle1](PictureAngular/ng10.png)
>
> ![ngStyle2](PictureAngular/ng11.png)
>
> `หมายเหตุ : ชื่อ propery css ถ้ามี - สามารถเขียนได้ 2 แบบ`
> - camelCase => `fontStyle`
> - " " or ' ' => `"font-style"` or `'font-style'`

> ### `Event Binding`
> คือ การ binding data จาก `component template` สู่ `component class`
>
> `syntax => (ชื่อevent)="function ที่เอาไว้ handle event"`
>
> ![eventBinding1](PictureAngular/ng12.png)
>
> ![eventBinding2](PictureAngular/ng13.png)
> หมายเหตุ : เราสามารถดักจับ event ได้ด้วยการส่ง `$event` (parameter event handle)
>
> ![eventBinding3](PictureAngular/ng14.png)
> หมายเหตุ : เราสามารถใช้ template statement แทน funtion handle event ได้ (`set property ผ่าน event binding ได้เลย`)

> ### `Template Reference Variables`
> คือ การ binding ที่อ้างอิง template element นั้น โดยที่เราสามารถเข้าถึง property ต่างๆของ template element นั้นๆ ได้เลย เรานิยมใช้ template ref กับ 
> - ng directive => ใช้อ้างอิง template element กับ ng directive ต่างๆ
> ![templateRef1](PictureAngular/ng15.png)
> - component interactive => ใช้กับ component interactive ระหว่าง parent component กับ child component เป็นต้น
> ![templateRef2](PictureAngular/ng16.png)
> - input 
> ![templateRef3](PictureAngular/ng17.png)
>
> `syntax -> #ชื่อ or ref-ชื่อ`

>### `Two Way Binding`
> คือ การ binding data ให้กับ property 2 ทางคือ
> - data(component template) เปลี่ยน ทำให้ data(component class) เปลี่ยนด้วย
> - data(component class) เปลี่ยน ทำให้ data(component template) เปลี่ยนด้วย
>
> `syntax -> ใช้ attribute [(ngModel)]`\
>=> [ ] property binding = data from class to template \
>=> ( ) event binding = data from template to class \
>=> จะรับค่าจาก template มาที่ class ผ่าน event binding แล้วอัพเดทค่าจาก class สู่ template ด้วย property binding
>
> `หมายเหตุ : เราสามารถทำ split two way binding เพื่อ handle การส่ง data จาก parent มา child ได้ advance มากขึ้น`

> ### `Getters-Setters`
> เราสามารถใช้ gettter-setter ในการจัดการค่าให้กับ property หรือ handle อะไรซักอย่าง หรือ ใช้แบบ Advance ในการส่ง data จาก Parent มา Child ได้ เช่น
>
> ![getter_setter](PictureAngular/ng18.png)
>
> ![getter_setter](PictureAngular/ng19.png)

## Ng-Directive

> ### `*nfIf`
> เป็นคำสั่ง if-else condition ที่ใช้กับ component template\
> `Note :` สามารถใช้ ng-template + template ref เข้ามาช่วยได้ แล้วก็ใน *ngIf ถ้า property ที่มาใช้เป็น condition เป็น null จะถือว่าเป็น false
>
> ![ngIf1](PictureAngular/ng20.png)
>
> ![ngIf1](PictureAngular/ng21.png)

> ### `[ngSwitch] กับ *ngSwitchCase`
> เป็นคำสั่ง switch case ที่ใช้กับ component template
>
> ![ngSwitch1](PictureAngular/ng22.png)

> ### `*ngFor`
> เป็นคำสั่ง for-loop ที่ใช้กับ component template
>
> ![ngFor](PictureAngular/ng23.png)
> `หมายเหตุ :`
>    - สามารถอ้างอิง Index ของ array ได้ ด้วย `index as i` (i หรือ ชื่ออะไรก็ได้) 
>    - สามารถ check ว่าเป็น first element ได้ด้วย `first as f` (f หรือ ชื่ออะไรก็ได้) 
>    - สามารถ check ว่าเป็น last element ได้ด้วย `last as l` (l หรือ ชื่ออะไรก็ได้) 
>    - สามารถ check ว่า index เป็น odd ได้ด้วย `odd as o` (o หรือ ชื่ออะไรก็ได้) 
>   - สามารถ check ว่า index เป็น even ได้ด้วย `even as e` (e หรือ ชื่ออะไรก็ได้) 

## Component Interaction
>