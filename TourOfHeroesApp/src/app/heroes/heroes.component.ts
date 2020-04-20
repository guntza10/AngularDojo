import { Component, OnInit } from '@angular/core';
import { HeroesModel } from '../models/HeroesModel';
import { HeroicHeroServiceService } from '../services/heroic-hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public listHero: HeroesModel[];
  constructor(private _heroicHeroService: HeroicHeroServiceService) { }

  ngOnInit(): void {
    this.listHero = this._heroicHeroService.getAllHero();
  }

}
