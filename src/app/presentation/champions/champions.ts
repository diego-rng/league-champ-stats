import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ChampionCardComponent } from "src/app/components/champion-card/champion-card";
import { ChampionListComponent } from "src/app/components/champion-list/champion-list";

@Component ({
    selector: 'app-champions',
    templateUrl: './champions.html',
    imports: [ChampionListComponent]
})

export class ChampionsContent {
    private activatedRoute =  inject(ActivatedRoute);
};