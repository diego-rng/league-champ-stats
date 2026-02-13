import { Component, inject } from '@angular/core';
import { isActive, Router, RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

import { NavigationUtil } from 'src/app/core/utils/navigation.util';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private router = inject(Router);
  private navigationUtil = inject(NavigationUtil)

  isHomeActive = isActive('/home', this.router, {
    paths: 'subset',
    queryParams: 'ignored',
    fragment: 'ignored',
    matrixParams: 'ignored'
  })
  
  navigateToHome () {
    this.navigationUtil.navigateTo({
      path: '/home',
      title: 'Home'
    })
  }

  isChampionsActive = isActive('/champions', this.router, {
    paths: 'subset',
    queryParams: 'ignored',
    fragment: 'ignored',
    matrixParams: 'ignored'
  })

  navigateToChampions () {
    this.navigationUtil.navigateTo({
      path: '/champions',
      title: 'Champions'
    })
  }

  isWinratesActive = isActive('/winrates', this.router, {
    paths: 'subset',
    queryParams: 'ignored',
    fragment: 'ignored',
    matrixParams: 'ignored'
  })

  navigateToWinrates () {
    this.navigationUtil.navigateTo({
      path: '/winrates',
      title: 'Winrates'
    })
  }
}
