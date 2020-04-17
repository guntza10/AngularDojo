import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-change-demo',
  templateUrl: './ng-on-change-demo.component.html',
  styleUrls: ['./ng-on-change-demo.component.css']
})
export class NgOnChangeDemoComponent implements OnInit, OnChanges {

  @Input() public ngOnChangeValue: boolean;
  public message: string;
  public name = 'template reference access from parent to child (property)';
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // get simpleChanges ของ property ngOnChangeValue ที่มีการเปลี่ยนแปลง จะได้ object simpleChanges ของ ngOnChangeValue
    let ngOnChangesVar = changes['ngOnChangeValue'];
    // เอา object ที่ได้มาเช็ค previousValue , currrentValue, firstChange ได้ (เอามาเช็คค่าการเปลี่ยแปลงได้) แล้ว Handle ต่อ
    if (ngOnChangesVar.currentValue) {
      this.message = 'true for ngOnChanges';
    }
    else {
      this.message = 'false for ngOnChanges';
    }
  }

  onTemplateRef() {
    alert('Hello Template Reference');
  }

  ngOnInit(): void {
  }

}
