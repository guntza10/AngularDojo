import { Component, ViewChild } from '@angular/core';
import { NgDirectiveComponent } from './ng-directive/ng-directive.component';

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

  // data from parent to child
  public componentInteraction = "componentInteraction 555";

  // property ที่รับค่าจาก child
  public message = "";

  // view child
  @ViewChild('testViewChild', { static: false }) testViewChild: NgDirectiveComponent;
  statusViewChild = false;

  //component interactive advance
  statusInteractive: boolean = true;
  
  onClickViewChild() {
    this.statusViewChild = (this.statusViewChild == false) ? true : false;
    this.testViewChild.color = (this.statusViewChild) ? 'orange' : 'red';
  }
}
