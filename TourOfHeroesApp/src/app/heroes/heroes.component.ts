import { Component, OnInit } from '@angular/core';
import { HeroesModel } from '../models/HeroesModel';
import { HeroicHeroServiceService } from '../services/heroic-hero-service.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public listHero: HeroesModel[];
  constructor(private _heroicHeroService: HeroicHeroServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listHero = this._heroicHeroService.getAllHero();
  }

  goToHeroView(id: string) {
    this.router.navigate(['heroView', id], { relativeTo: this.route });
  }

  deleteHero() { 
    
  }

}
