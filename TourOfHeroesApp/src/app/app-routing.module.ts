import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroViewComponent } from './hero-view/hero-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'dashboard/heroDetail/:id', component: HeroDetailComponent
  },
  {
    path: 'heroes', component: HeroesComponent,
    children: [
      {
        path: 'heroView/:id', component: HeroViewComponent
      }
    ]
  },
  {
    path: 'heroes/heroView/heroDetail/:id', component: HeroDetailComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DashboardComponent, HeroesComponent, PageNotFoundComponent, HeroDetailComponent, HeroViewComponent]