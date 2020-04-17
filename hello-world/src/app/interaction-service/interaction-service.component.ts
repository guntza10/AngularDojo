import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../services/interaction.service';

@Component({
  selector: 'app-interaction-service',
  templateUrl: './interaction-service.component.html',
  styleUrls: ['./interaction-service.component.css']
})
export class InteractionServiceComponent implements OnInit {

  public dataFromService;
  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
    // subscribe property ของ service ที่เก็บ Observable ของ subject
    this._interactionService.subjectMessage$
      .subscribe(data => {
        this.dataFromService = data;
        if (data === 'Akuma') {
          alert("I'm Akuma");
        }
        else if (data === 'FalseNoGod') {
          alert("I'm FalseNoGod");
        }
      });
  }
}
