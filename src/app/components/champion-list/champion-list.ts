import { Component, inject, Injectable, OnInit,  } from '@angular/core';
import { NgModel } from '@angular/forms';

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

  getChampionByName(name: string): Champion | undefined {
    return this.champions[name];
  }
}

@Component({
  selector: 'app-champion-list',
  imports: [ChampionCardComponent],
  templateUrl: './champion-list.html',
})
export class ChampionListComponent implements OnInit {
  champions: Champion[] = [];

  ChampService = inject(ChampionService);

  SUGGESTED_LANE = {
    Aatrox: 'Top',
    Ahri: 'Middle',
    Akali: 'Middle',
    Akshan: 'Middle',
    Alistar: 'Support',
    Ambessa: 'Top',
    Amumu: 'Jungle',
    Anivia: 'Middle',
    Annie: 'Middle',
    Aphelios: 'Bottom',
    Ashe: 'Bottom',
    AurelionSol: 'Middle',
    Aurora: 'Middle',
    Azir: 'Middle',
    Bard: 'Support',
    Belveth: 'Jungle',
    Blitzcrank: 'Support',
    Brand: 'Support',
    Braum: 'Support',
    Briar: 'Jungle',
    Caitlyn: 'Bottom',
    Camille: 'Top',
    Cassiopeia: 'Middle',
    Chogath: 'Top',
    Corki: 'Middle',
    Darius: 'Top',
    Diana: 'Jungle',
    DrMundo: 'Top',
    Draven: 'Bottom',
    Ekko: 'Jungle',
    Elise: 'Jungle',
    Evelynn: 'Jungle',
    Ezreal: 'Bottom',
    Fiddlesticks: 'Jungle',
    Fiora: 'Top',
    Fizz: 'Middle',
    Galio: 'Middle',
    Gangplank: 'Top',
    Garen: 'Top',
    Gnar: 'Top',
    Gragas: 'Top',
    Graves: 'Jungle',
    Gwen: 'Top',
    Hecarim: 'Jungle',
    Heimerdinger: 'Top',
    Hwei: 'Middle',
    Illaoi: 'Top',
    Irelia: 'Top',
    Ivern: 'Jungle',
    Janna: 'Support',
    JarvanIV: 'Jungle',
    Jax: 'Top',
    Jayce: 'Top',
    Jhin: 'Bottom',
    Jinx: 'Bottom',
    Kaisa: 'Bottom',
    Kalista: 'Bottom',
    Karma: 'Support',
    Karthus: 'Jungle',
    Kassadin: 'Middle',
    Katarina: 'Middle',
    Kayle: 'Top',
    Kayn: 'Jungle',
    Kennen: 'Top',
    Khazix: 'Jungle',
    Kindred: 'Jungle',
    Kled: 'Top',
    KogMaw: 'Bottom',
    KSante: 'Top',
    Leblanc: 'Middle',
    LeeSin: 'Jungle',
    Leona: 'Support',
    Lillia: 'Jungle',
    Lissandra: 'Middle',
    Lucian: 'Bottom',
    Lulu: 'Support',
    Lux: 'Support',
    Malphite: 'Top',
    Malzahar: 'Middle',
    Maokai: 'Top',
    MasterYi: 'Jungle',
    Mel: 'Middle',
    MonkeyKing: 'Top',
    Milio: 'Support',
    MissFortune: 'Bottom',
    Mordekaiser: 'Top',
    Morgana: 'Support',
    Naafiri: 'Middle',
    Nami: 'Support',
    Nasus: 'Top',
    Nautilus: 'Support',
    Neeko: 'Middle',
    Nidalee: 'Jungle',
    Nilah: 'Bottom',
    Nocturne: 'Jungle',
    Nunu: 'Jungle',
    Olaf: 'Top',
    Orianna: 'Middle',
    Ornn: 'Top',
    Pantheon: 'Top',
    Poppy: 'Top',
    Pyke: 'Support',
    Qiyana: 'Middle',
    Quinn: 'Top',
    Rakan: 'Support',
    Rammus: 'Jungle',
    RekSai: 'Jungle',
    Rell: 'Support',
    Renata: 'Support',
    Renekton: 'Top',
    Rengar: 'Jungle',
    Riven: 'Top',
    Rumble: 'Top',
    Ryze: 'Middle',
    Samira: 'Bottom',
    Sejuani: 'Jungle',
    Senna: 'Support',
    Seraphine: 'Support',
    Sett: 'Top',
    Shaco: 'Jungle',
    Shen: 'Top',
    Shyvana: 'Jungle',
    Singed: 'Top',
    Sion: 'Top',
    Sivir: 'Bottom',
    Skarner: 'Jungle',
    Smolder: 'Bottom',
    Sona: 'Support',
    Soraka: 'Support',
    Swain: 'Middle',
    Sylas: 'Middle',
    Syndra: 'Middle',
    TahmKench: 'Support',
    Taliyah: 'Middle',
    Talon: 'Middle',
    Taric: 'Support',
    Teemo: 'Top',
    Thresh: 'Support',
    Tristana: 'Bottom',
    Trundle: 'Top',
    Tryndamere: 'Top',
    TwistedFate: 'Middle',
    Twitch: 'Bottom',
    Udyr: 'Jungle',
    Urgot: 'Top',
    Varus: 'Bottom',
    Vayne: 'Bottom',
    Veigar: 'Middle',
    Velkoz: 'Middle',
    Vex: 'Middle',
    Vi: 'Jungle',
    Viego: 'Jungle',
    Viktor: 'Middle',
    Vladimir: 'Middle',
    Volibear: 'Top',
    Warwick: 'Jungle',
    Xayah: 'Bottom',
    Xerath: 'Middle',
    XinZhao: 'Jungle',
    Yasuo: 'Middle',
    Yone: 'Middle',
    Yorick: 'Top',
    Yunara: 'Bottom',
    Yuumi: 'Support',
    Zaahen: 'Top',
    Zac: 'Jungle',
    Zed: 'Middle',
    Zeri: 'Bottom',
    Ziggs: 'Bottom',
    Zilean: 'Support',
    Zoe: 'Middle',
    Zyra: 'Support',
  };

  selectedLane: string | undefined = undefined

  laneSelectorChange (selectedLane: string | undefined) {
    this.selectedLane = selectedLane
    console.log(" adsadasas" + this.selectedLane)
  }

  getChampionLane(name:string):string {
    if (name in this.SUGGESTED_LANE) {
      return this.SUGGESTED_LANE[name as keyof typeof this.SUGGESTED_LANE]
    }
    return ""
  }


  ngOnInit() {
    const data = this.ChampService.getChampions();

    this.champions = Object.values(data);
  }
}
