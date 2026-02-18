import { Component, inject, Injectable, OnInit } from '@angular/core';
import championList from '@champList/champion.json';
import { ChampionCardComponent } from '../champion-card/champion-card';

export interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: { attack: number; defense: number; magic: number; difficulty: number };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
  partype: string;
  stats: Record<string, number>
}


@Injectable({ providedIn: 'root' })
export class ChampionService {
    private champions: Record<string, Champion> = championList.data as Record<string, Champion>;

  getChampions(): Record<string, Champion> {
    return this.champions;
  }

  getChampionByName(name: string): Champion | undefined{
    return this.champions[name];
  }
}

@Component({
    selector: 'app-champion-list',
    imports: [ChampionCardComponent],
    templateUrl: './champion-list.html',
})
export class ChampionListComponent implements OnInit {
    champions: Champion[] = []
    
    ChampService = inject(ChampionService)


    ngOnInit() {
        const data = this.ChampService.getChampions();

        this.champions = Object.values(data)
    }
}
