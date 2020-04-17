import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-parent-injection',
  templateUrl: './parent-injection.component.html',
  styles: []
})
export class ParentInjectionComponent implements OnInit {

  public statusClick: Boolean;
  public defaultName: string;
  // inject parent 
  constructor(private app: AppComponent) {
    this.defaultName = app.defaultName;
  }

  ngOnInit(): void {
  }

  onParentInject() {
    this.statusClick = (this.statusClick) ? false : true;
    this.app.title = (this.statusClick) ? 'Hello From Child with Parent Injection' : this.defaultName;
  }

}
