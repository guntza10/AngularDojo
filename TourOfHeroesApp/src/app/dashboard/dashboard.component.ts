import { Component, OnInit } from '@angular/core';
import { HeroicHeroServiceService } from '../services/heroic-hero-service.service';
import { HeroesModel } from '../models/HeroesModel';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public listHero: HeroesModel[];
  constructor(private _heroicHeroesService: HeroicHeroServiceService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.listHero = this._heroicHeroesService.getAllTopHeroes();
  }

  goToHeroDetail(id: string) {
    this.router.navigate(['heroDetail', id], { relativeTo: this.route });
  }

}
