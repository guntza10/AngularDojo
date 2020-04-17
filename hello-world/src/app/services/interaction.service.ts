import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  // 1. parent -> service -> child
  // สร้าง subject
  private _subjectMessageSource = new Subject<string>();
  // เอา subject ที่สร้างมาแปลงให้เป็น Observable
  subjectMessage$ = this._subjectMessageSource.asObservable();

  // ทำ service ขึ้นมาเพื่อแชร์ data ให้กับ component
  private isLogged: boolean;

  constructor() { }

  // method ของ service ที่เอาไว้รับ data จาก parent
  keepDataToService(message: string) {
    // data ที่ได้มาเก็บไว้ที่ subject
    this._subjectMessageSource.next(message);
  }

  logIn() {
    this.isLogged = true;
  }

  logOut() {
    this.isLogged = false;
  }

  getStatus() {
    return this.isLogged;
  }
}
