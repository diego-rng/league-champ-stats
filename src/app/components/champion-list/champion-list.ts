import { Component, inject, Injectable, OnInit } from '@angular/core';
import championList from '../../../assets/data-dragon/16.4.1/data/en_US/championFull.json';
import { ChampionCardComponent } from '../champion-card/champion-card';

export interface ChampionResponse {
  type: string;
  format: string;
  version: string;
  data: Record<string, Champion>;
}

export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  image: ImageInfo;
  skins: Skin[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  info: ChampionInfo;
  stats: ChampionStats;
  spells: Spell[];
  passive: Passive;
  recommended: unknown[];
}

export interface ImageInfo {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Skin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

export interface ChampionInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface ChampionStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: {
    label: string[];
    effect: string[];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: Record<string, unknown>;
  effect: (number[] | null)[];
  effectBurn: (string | null)[];
  vars: unknown[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: ImageInfo;
  resource: string;
}

export interface Passive {
  name: string;
  description: string;
  image: ImageInfo;
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
