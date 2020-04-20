import { Component, OnInit } from '@angular/core';
import { HeroicHeroServiceService } from '../services/heroic-hero-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.component.html',
  styleUrls: ['./hero-view.component.css']
})
export class HeroViewComponent implements OnInit {

  public id: string;
  public nameHero: string;
  constructor(private _heroicHeroService: HeroicHeroServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get('id');
      this.nameHero = this._heroicHeroService.getNameHero(this.id);
    });
  }

  goToHeroDetail(id: string) {
    this.router.navigate(['../','heroDetail', id], { relativeTo: this.route });
  }

}
