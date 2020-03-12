import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BindingComponent } from './binding/binding.component';
import { NgDirectiveComponent } from './ng-directive/ng-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';

// Ngmodule decorator
@NgModule({
  //declaration containe all component
  declarations: [
    // ทุกครั้งที่สร้าง component จะมีการ Import component class ให้ auto ใน metadata declaration
    AppComponent,
    TestComponent,
    BindingComponent,
    NgDirectiveComponent,
    ComponentInteractionComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
