import { Component, Input, signal } from "@angular/core";
import { Champion } from "../champion-list/champion-list";
import { isActive } from "@angular/router";



@Component({
  selector: 'champ-modal',
  templateUrl: './modal.html'
})

export class ModalComponent {
  @Input() isActive!: boolean;
  @Input() champData!: Champion;


  disableModal() {
    this.isActive = false
  }

}
