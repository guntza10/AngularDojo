import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
  // Input decorator บอกว่า property parentData เป็น data(input) ที่รับมาจาก parent 
  // @Input() public parentData;
  // สามารถ define ชื่อให้มันได้
  @Input('parentData') public name;
  
  // Event ที่จะส่ง data จาก child ไป parent
  @Output() public childEvent = new EventEmitter();
  // สามารถ define ชื่อให้มันได้
  // @Output('childEvent55') public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendEvent() {
    // ส่ง event (data) ไป parent ("Hey! data from child with event" คือ event ที่ส่งไป)
    this.childEvent.emit("Hey! data from child with event");
  }

}
