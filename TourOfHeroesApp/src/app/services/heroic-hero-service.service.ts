import { Injectable } from '@angular/core';
import { HeroesModel } from '../models/HeroesModel';

@Injectable({
  providedIn: 'root'
})
export class HeroicHeroServiceService {

  private listHero: HeroesModel[] = [
    {
      id: '1',
      Name: 'Narco'
    },
    {
      id: '2',
      Name: 'Bambasto'
    },
    {
      id: '3',
      Name: 'Celeritas'
    },
    {
      id: '4',
      Name: 'Magneto'
    },
    {
      id: '5',
      Name: 'Dr.Nice'
    },
    {
      id: '6',
      Name: 'MaskRider Ryuki'
    },
    {
      id: '7',
      Name: 'RubberMan'
    },
    {
      id: '8',
      Name: 'Magneto'
    },
    {
      id: '9',
      Name: 'Dynama'
    },
    {
      id: '10',
      Name: 'Dr.Iq'
    },
    {
      id: '11',
      Name: 'Magma'
    },
    {
      id: '12',
      Name: 'Tornado'
    },
    {
      id: '13',
      Name: 'Iron Man'
    },
    {
      id: '14',
      Name: 'Spider man'
    }
  ];

  constructor() { }

  getAllTopHeroes() {
    return this.listHero.slice(0, 4);
  }

  getAllHero() {
    return this.listHero;
  }

  getHeroDetail(id: string) {
    return this.listHero.find(obj => obj.id === id);
  }

  changeData(id: string, newName: string) {
    let elementIndex = this.listHero.findIndex(obj => obj.id === id);
    this.listHero[elementIndex].Name = newName;
  }

}
