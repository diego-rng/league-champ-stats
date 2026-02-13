import { Routes } from '@angular/router';

import { MainLayoutComponent } from './presentation/main-layout/main-layout';
import { HomeComponent } from './presentation/home/home';
import { ChampionsContent } from './presentation/champions/champions';
import { App } from './app';
import { WinrateComponent } from './presentation/winrates/winrates';
import { StatsComponent } from './presentation/stats/stats';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        title: "Home",
      },
      {
        path: 'champions',
        component: ChampionsContent,
        title: "Champions"
      },
      {
        path: 'winrates',
        component: WinrateComponent,
        title: "Winrates"
      },
      {
        path: 'stats',
        component: StatsComponent,
        title: "Stats"
      }
    ]
  }
];
