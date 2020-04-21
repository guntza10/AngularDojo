import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Angular LifeCycle';
  private _count: number = 5555;
  private _count2: number = 6666;
  public name: string = 'Akuma';
  public invisible: boolean = true;
  public message: string;

  user = {
    name: 'Akari'
  }

  get count() {
    return this._count;
  }

  set count(value) {
    this._count = value;
  }

  get count2() {
    return this._count2;
  }

  set count2(value) {
    this._count2 = value;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  increment2() {
    this.count2++;
  }

  decrement2() {
    this.count2--;
  }

  updateValue() {
    this.user.name = (this.user.name === "Akari") ? 'Mr.Tomorrow' : 'Akari';
  }

  switchInvisible() {
    this.invisible = (this.invisible) ? false : true;
    if (this.invisible) {
      this.message = '';
    }
  }

  getEventFromChild(message) {
    this.message = message;
  }

}
