import { Component, Input, signal, WritableSignal } from "@angular/core";
import { Champion } from "../champion-list/champion-list";
import { isActive } from "@angular/router";

@Component({
  selector: 'champ-modal',
  templateUrl: './modal.html'
})

export class ModalComponent {
  @Input() isActive!: WritableSignal<boolean>;
  @Input() champData!: Champion;


  disableModal() {
    this.isActive.set(false)
  }


}
