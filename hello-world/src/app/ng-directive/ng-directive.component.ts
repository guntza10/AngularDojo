import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directive',
  templateUrl: './ng-directive.component.html',
  styleUrls: ['./ng-directive.component.css']
})
export class NgDirectiveComponent implements OnInit {
  // ngIf
  public displayName = true;
  // ngSwitch
  public color = "red";
  // ngFor
  public colors = ["red", "blue", "green", "yellow"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
