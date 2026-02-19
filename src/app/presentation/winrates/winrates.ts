import { Component } from "@angular/core";
import { ChampionCardComponent } from "src/app/components/champion-card/champion-card";
import { ModalComponent } from "src/app/components/modal/modal";

@Component({
    templateUrl: "./winrates.html",
    imports: [ModalComponent, ChampionCardComponent],
})

export class WinrateComponent {

}
