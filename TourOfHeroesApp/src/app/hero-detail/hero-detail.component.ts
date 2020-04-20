import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HeroicHeroServiceService } from '../services/heroic-hero-service.service';
import { HeroesModel } from '../models/HeroesModel';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  public heroData: HeroesModel;
  public idHero: string;
  public nameHero: string;
  
  constructor(private router: Router, private route: ActivatedRoute, private _heroicHeroesService: HeroicHeroServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      this.heroData = this.getDataHeroDetail(id);
      this.idHero = this.heroData.id;
      this.nameHero = this.heroData.Name;
    });
  }

  getDataHeroDetail(id: string): HeroesModel {
    return this._heroicHeroesService.getHeroDetail(id);
  }

  goToPrevious() {
    if (this.router.url.includes('dashboard')) {
      this.router.navigate(['../../'], { relativeTo: this.route });
    } else {
      this.router.navigate(['../../', this.idHero], { relativeTo: this.route });
    }
  }

  saveChange(id: string) {
    this._heroicHeroesService.changeData(id, this.nameHero);
    if (this.router.url.includes('dashboard')) {
      this.router.navigate(['../../'], { relativeTo: this.route });
    } else {
      this.router.navigate(['../../', this.idHero], { relativeTo: this.route });
    }
  }

}
