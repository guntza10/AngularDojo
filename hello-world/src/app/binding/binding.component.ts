import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  // templateUrl: './binding.component.html',
  template: `
  <h2>
    Welcome {{name}} || binding.component
  </h2> 
  <h1 [class.textInterPolation]="IsTextInterpolation" [class.text-style]="IsTextStyle">Interpolation</h1>
  <h2>{{2+2}}</h2>
  <h2>{{"welcome" + 2 + 2}}</h2> 
  <h2>{{"welcome " + name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{showName()}}</h2>
  <!-- can't assiging variable -->
  <!-- <h2>{{a = 2+2}}</h2> -->
  <!-- <h2>{{window.location.href}}</h2> -->
  <h2>{{siteUrl}}</h2>
  <h1>------------------------------------------------------------------------------------------------------------------------------</h1>
  <h1 [class.textProperty]="IsTextProperty" class="text-style">Property Binding</h1>
  <input [id]="myId" type="text" value="property Binding"> 
  <input [disabled]="false" type="text" value="attributeBoolean Set With PropetyBinding"> 
  <input [disabled]="IsDisbled" type="text" value="attributeBoolean Set With PropetyBinding from property of class"> 
  <input bind-disabled="IsDisbled" type="text" value="attributeBoolean Set With PropetyBinding from property of class"> 
  <input disabled="false" type="text" value="attributeBoolean Set With StringValue"> 
  <h1 [ngClass]="ngClasses">Test NgClass</h1>
  <h1>------------------------------------------------------------------------------------------------------------------------------</h1>
  <h1 [class.textInterPolation]="IsTextProperty" class="text-style">Class Binding && Style Binding</h1>
  <h2 [style.color]='"orange"'>Test Style Class</h2>
  <h2 [style.color]='IsStyle? "yellow" : "green"'>Test Style Class with condition expression</h2>
  <h2 [style.color]='highLightColor'>Test Style Class with property</h2>
  <h2 [ngStyle]='titleStyle'>Test Style Class with NgStyle</h2>
  <h1>------------------------------------------------------------------------------------------------------------------------------</h1>
  <h1 [class.textInterPolation]="IsTextInterpolation" [class.text-style]="IsTextStyle">Event Binding</h1>
  <h2>
    Welcome {{name}}
  </h2>
  <button (click)="onClick($event)">Event Handle</button>
  <button (click)="showEvent='Welcome gunt by template statement'">Template Statement</button>
  <h2>{{showEvent}}</h2>
  <h1>------------------------------------------------------------------------------------------------------------------------------</h1>
  <h1 [class.textInterPolation]="IsTextInterpolation" [class.text-style]="IsTextStyle">Template Reference Variables</h1>
  <input #myInput type="text">
  <button (click)="logMessage(myInput)">Templae Reference it selft</button>
  <button (click)="logMessage(myInput.value)">Templae Reference value property</button>
  <h1>------------------------------------------------------------------------------------------------------------------------------</h1>
  <h1 [class.textInterPolation]="IsTextInterpolation" [class.text-style]="IsTextStyle">Two Way Binding</h1>
  <input [(ngModel)]="twoWayBinding" type="text">
  <h2>{{twoWayBinding}}</h2>
  `,
  styles: [`
    .textInterPolation {
      color: red;
    }

    .textProperty {
      color: green;
    }

    .text-style {
      font-style: italic;
    }
  `]
})
export class BindingComponent implements OnInit {
  // property
  public name = "Akuma"
  public siteUrl = window.location.href;
  public myId = "testId";
  public IsDisbled = true;
  public IsTextInterpolation = true;
  public IsTextProperty = true;
  public IsTextStyle = true;
  // class binding
  public ngClasses = {
    "textProperty": this.IsTextProperty,
    "text-style": this.IsTextStyle
  };
  // style binding
  public IsStyle = false;
  public highLightColor = "red";
  public titleStyle = {
    color: "blue",
    // fontStyle: "italic"
    "font-style": "italic"
  };
  // event binding
  public showEvent = "";
  // Two Way Binding
  public twoWayBinding = "";


  constructor() { }

  ngOnInit(): void {
  }

  showName() {
    return "Hello " + this.name;
  }

  onClick(event) {
    // console.log("Welcome gunt");
    console.log(event.type);
    this.showEvent = "Welcome gunt by event handle";
    // this.showEvent = event.type;
  }

  logMessage(value) {
    console.log(value);
  }

}
