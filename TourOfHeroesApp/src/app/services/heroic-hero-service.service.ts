import { Injectable } from '@angular/core';
import { HeroesModel } from '../models/HeroesModel';

@Injectable({
  providedIn: 'root'
})
export class HeroicHeroServiceService {

  private listHero: HeroesModel[] = [
    {
      id: this.generateId(),
      Name: 'Narco'
    },
    {
      id: this.generateId(),
      Name: 'Bambasto'
    },
    {
      id: this.generateId(),
      Name: 'Celeritas'
    },
    {
      id: this.generateId(),
      Name: 'Magneto'
    },
    {
      id: this.generateId(),
      Name: 'Dr.Nice'
    },
    {
      id: this.generateId(),
      Name: 'MaskRider Ryuki'
    },
    {
      id: this.generateId(),
      Name: 'RubberMan'
    },
    {
      id: this.generateId(),
      Name: 'Magneto'
    },
    {
      id: this.generateId(),
      Name: 'Dynama'
    },
    {
      id: this.generateId(),
      Name: 'Dr.Iq'
    },
    {
      id: this.generateId(),
      Name: 'Magma'
    },
    {
      id: this.generateId(),
      Name: 'Tornado'
    },
    {
      id: this.generateId(),
      Name: 'Iron Man'
    },
    {
      id: this.generateId(),
      Name: 'Spider man'
    }
  ];

  constructor() { }

  generateId(): string {
    return `${Math.random().toString(36).substr(2)}-${Math.random().toString(36).substr(2)}`;
  }

  getAllTopHeroes() {
    return this.listHero.slice(0, 4);
  }

  getAllHero() {
    return this.listHero;
  }

  getHeroDetail(id: string) {
    return this.listHero.find(data => data.id === id);
  }

  getNameHero(id: string) {
    return this.listHero.find(data => data.id === id).Name;
  }

  changeData(id: string, newName: string) {
    let elementIndex = this.listHero.findIndex(data => data.id === id);
    this.listHero[elementIndex].Name = newName;
  }

  addHero(name: string) {

    let newData: HeroesModel = {
      id: (this.listHero.length + 1).toString(),
      Name: name
    };
    this.listHero.push(newData);
  }

  deleteHero(id: string) {
    this.listHero.splice(this.listHero.findIndex(data => data.id === id), 1);
  }

}
