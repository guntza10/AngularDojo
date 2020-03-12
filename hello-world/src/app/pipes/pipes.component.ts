import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public pipes = "Angular Pipes";
  public titleName = "welcome to angular";
  // Json pipe
  public person = {
    firstName: "Gunt",
    lastName: "Kodcool"
  }
  // date pipe
  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
