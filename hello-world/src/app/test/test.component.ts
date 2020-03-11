import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',
  // selector: '.app-test',
  selector: '[app-test]',
  // templateUrl: './test.component.html',
  template: `<div>
      Test Use template Property instead templateUrl for multiple line
  </div>`,
  // template: "<div> Test Use template Property instead templateUrl for intline</div>",
  // styleUrls: ['./test.component.css']
  styles: [`
    div {
      color:red
    }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
