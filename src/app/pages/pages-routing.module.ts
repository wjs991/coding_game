import { CodingComponent } from './game/coding/coding.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {GameRoutes}from './game/game.routes';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {GameComponent} from './game/game.component';
import {GameMenuComponent} from './game/game-menu/game-menu.component'

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path:'coding',
      component: CodingComponent,
    },
    {
      path:'game-menu',
      component:GameMenuComponent,
    },
    {
      path :'game',
      component : GameComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
