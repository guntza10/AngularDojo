import { Component, ViewChild } from '@angular/core';
import { NgDirectiveComponent } from './ng-directive/ng-directive.component';
import { InteractionService } from './services/interaction.service';

// Metadata -> บอกว่านี่ไม่ใช่ class ปกติ แต่เป็น component class
// component decorator
@Component({
  // metadata -> selector,templateUrl,styleUrls
  selector: 'app-root', // เป็น metadata ที่เป็นชื่อ tag html ที่เราจะเอา component นี้ไปใช้
  templateUrl: './app.component.html', // เป็น metadata ที่อ้างอิง template(html)
  styleUrls: ['./app.component.css'] // เป็น metadata ที่อ้างอิง style(css)
})

// class
export class AppComponent {
  title = 'hello-world';
  defaultName = 'hello-world';
  // data from parent to child
  public componentInteraction = "componentInteraction 555";

  // property ที่รับค่าจาก child
  public message = "";

  // view child
  //  @ViewChild('ชื่อtemplate refที่เราตั้ง', { static: false }) ชื่อ Property : type เป็น child component
  // @ViewChild('testViewChild', { static: false }) childComponentRef: NgDirectiveComponent;// ใช้ template ref
  @ViewChild(NgDirectiveComponent, { static: false }) childComponentRef: NgDirectiveComponent; // ใช้ child component ref
  statusViewChild = false;

  //component interactive advance
  statusInteractive: boolean = true;

  // inject service ที่จะใช้ keep data
  constructor(public _interactionService: InteractionService) {

  }

  onClickViewChild() {
    this.statusViewChild = (this.statusViewChild == false) ? true : false;
    this.childComponentRef.color = (this.statusViewChild) ? 'orange' : 'red';
  }
  // รับ data ที่เป็น event value จาก child มันจะแปลงค่าให้เหมาะกับ Local property ที่มัน assign ให้
  getDataFromChild(dataChild) {
    this.message = dataChild;
  }

  sendAkuma() {
    // เรียกใช้ method ที่เก็บ data ไว้ที่ service
    this._interactionService.keepDataToService('Akuma');
  }

  sendFalseNoGod() {
    // เรียกใช้ method ที่เก็บ data ไว้ที่ service
    this._interactionService.keepDataToService('FalseNoGod')
  }
}
