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
import { ForService1Component } from './for-service1/for-service1.component';
import { ForService2Component } from './for-service2/for-service2.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule} from '@angular/common/http';
import { ComponentInteractive2Component } from './component-interactive2/component-interactive2.component';

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
    PipesComponent,
    ForService1Component,
    ForService2Component,
    ComponentInteractive2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // register services ด้วย injector providers -> ใน version ใหม่ไม่ต้อง inject service แล้ว
  providers: [EmployeeService],
  // boostrap kick to AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
