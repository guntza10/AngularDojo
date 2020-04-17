import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-share-service1',
  templateUrl: './share-service1.component.html',
  styles: []
})
export class ShareService1Component implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
  }

  // share data from service
  logIn() {
    this._interactionService.logIn();
  }

  logOut() {
    this._interactionService.logOut();
  }

}
