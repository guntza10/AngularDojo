import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input('parentValue') public childValue: number;
  @Input('parentValue2') public childValue2: number;
  @Input('parentValue3') public childValue3;
  @Output('messageEvent') public childEvent = new EventEmitter();

  constructor() { }

  // get childValue() {
  //   return this._childValue;
  // }

  // @Input('parentValue')
  // set childValue(value) {
  //   this._childValue = value;
  // }

  // get childValue2() {
  //   return this._childValue2;
  // }

  // @Input('parentValue2')
  // set childValue2(value) {
  //   this._childValue2 = value;
  // }

  // lifeCycle : ngOnChanges (parent)
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Hi ngOnChanges');
    console.log(changes);
    let childVar = changes['childValue'];
    let childVar2 = changes['childValue2'];
    let childVar3 = changes['childValue3'];
    // this.childValue = childVar.currentValue;
    if (childVar) {
      console.log(`previous : ${childVar.previousValue}`);
      console.log(`current : ${childVar.currentValue}`);
      this.childValue = childVar.currentValue;
    }

    if (childVar2) {
      console.log(`previous2 : ${childVar2.previousValue}`);
      console.log(`current2 : ${childVar2.currentValue}`);
      this.childValue2 = childVar2.currentValue;
    }

    if (childVar3) {
      console.log(`previous3 : ${childVar3.previousValue}`);
      console.log(`current3 : ${childVar3.currentValue}`);
      this.childValue3 = childVar3.currentValue;
      console.log(this.childValue3);
    }
  }

  // lifeCycle : ngOnInit (parent)
  ngOnInit(): void {
    console.log('Hi ngOnInit');
    console.log(`ngOnInit : ${this.childValue}`);
    console.log(`ngOnInit : ${this.childValue2}`);
  }

  //lifeCycle : ngDoCheck (parent)
  ngDoCheck(): void {
    console.log('Hi ngDoCheck');
    console.log(this.childValue3);
  }

  //lifeCycle : ngAfterContentInit (child)
  ngAfterContentInit() {
    console.log('Hi ngAfterContentInit');
  }

  //lifeCycle : ngAfterContentChecked (child)
  ngAfterContentChecked() {
    console.log('Hi ngAfterContentChecked');
  }

  //lifeCycle : ngAfterViewInit (child)
  ngAfterViewInit() {
    console.log('Hi ngAfterViewInit');
  }

  //lifeCycle : ngAfterViewChecked (child)
  ngAfterViewChecked() {
    console.log('Hi ngAfterViewChecked');
  }

  //lifeCycle : ngOnDestroy (parent)
  ngOnDestroy(): void {
    this.childEvent.emit('Child is Hide!');
    console.log('Hi ngOnDestroy');
  }

}
