import { Component, Input, signal, WritableSignal } from "@angular/core";
import { NgClass } from "@angular/common";
import { Champion } from "../champion-list/champion-list";
import { isActive } from "@angular/router";


@Component({
  selector: 'champ-modal',
  templateUrl: './modal.html',
  imports: [NgClass]
})

export class ModalComponent {
  @Input() isActive!: WritableSignal<boolean>;
  @Input() champData!: Champion;

  isPassiveHovered = false
  isQHovered = false
  isWHovered = false
  isEHovered = false
  isRHovered = false


  disableModal() {
    this.isActive.set(false)
  }

}
