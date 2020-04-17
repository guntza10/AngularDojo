import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  // สร้าง subject
  private _subjectMessageSource = new Subject<string>();
  // เอา subject ที่สร้างมาแปลงให้เป็น Observable
  subjectMessage$ = this._subjectMessageSource.asObservable();

  constructor() { }

  // method ของ service ที่เอาไว้รับ data จาก parent
  keepDataToService(message: string) {
    // data ที่ได้มาเก็บไว้ที่ subject
    this._subjectMessageSource.next(message);
  }
}
