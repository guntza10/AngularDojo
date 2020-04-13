import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmetnListComponent } from './departmetn-list.component';

describe('DepartmetnListComponent', () => {
  let component: DepartmetnListComponent;
  let fixture: ComponentFixture<DepartmetnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmetnListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmetnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
