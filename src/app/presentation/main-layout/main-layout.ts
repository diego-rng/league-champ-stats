import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Navbar } from "src/app/components/navbar/navbar";

@Component ({
    selector: 'app-main-layout',
    standalone: true,
    imports: [RouterModule, Navbar],
    templateUrl: './main-layout.html'
})

export class MainLayoutComponent {

}