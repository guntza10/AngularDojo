import { Component, OnInit, Input } from '@angular/core';
import { retry } from 'rxjs/operators';
import { log } from 'util';

@Component({
  selector: 'app-component-interactive2',
  templateUrl: './component-interactive2.component.html',
  styleUrls: ['./component-interactive2.component.css']
})
export class ComponentInteractive2Component implements OnInit {

  // getters and setters
  private _statusFlag: boolean;

  get statusFlag(): boolean {
    return this._statusFlag;
  }

  @Input('parentData2')
  set statusFlag(value: boolean) {
    this._statusFlag = value;
  }

  // split two way binding
  @Input('parentData3') public statusFlagFromParent: boolean;
  public statusFlagWithTwoWayBinding: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(`statusFlag : ${this.statusFlag}`);
    console.log(`statusFlagFromParent : ${this.statusFlagFromParent}`);
    this.statusFlagWithTwoWayBinding = this.statusFlagFromParent;
  }

  setFlagWithSplitTwoWayBinding() {
    this.statusFlagWithTwoWayBinding = this.statusFlagFromParent;
  }

}
