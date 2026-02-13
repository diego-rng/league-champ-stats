import { Component, inject } from "@angular/core";

const API = require('data-dragon-api');
const DataDragon = new API('en-US');

@Component ({
   templateUrl: "./champion-banner.html"
})

 export class ChampionBannerComponent {
    DataDragon = inject(DataDragon)
    
}