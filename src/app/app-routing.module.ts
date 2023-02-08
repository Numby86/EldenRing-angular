import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'create-character',
    loadChildren: () => import('./pages/create-character/create-character.module').then(m => m.CreateCharacterModule)
  },
  {
    path: 'weapons',
    loadChildren: () => import('./pages/weapons/weapons.module').then(m => m.WeaponsModule)
  },
  {
    path: 'bosses',
    loadChildren: () => import('./pages/bosses/bosses.module').then(m => m.BossesModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error-page/error-page.module').then(m => m.ErrorPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}