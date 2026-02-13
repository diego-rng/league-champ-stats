import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component ({
    selector: 'app-champions',
    imports: [],
    templateUrl: './champions.html'
})

export class ChampionsContent {
    private activatedRoute =  inject(ActivatedRoute);
};