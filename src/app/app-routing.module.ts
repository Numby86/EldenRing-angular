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
    path: 'bosses',
    loadChildren: () => import('./pages/bosses/bosses.module').then(m => m.BossesModule)
  }, 
  {
    path: 'bosses-detail/:id',
    loadChildren: () => import('./pages/bosses-detail/bosses-detail.module').then(m => m.BossesDetailModule)
  }, 
  {
    path: 'create-character',
    loadChildren: () => import('./pages/create-character/create-character.module').then(m => m.CreateCharacterModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./pages/items/items.module').then(m => m.ItemsModule)
  },
  {
    path: 'weapons',
    loadChildren: () => import('./pages/weapons/weapons.module').then(m => m.WeaponsModule)
  },
  {
    path: 'weapons-detail/:id',
    loadChildren: () => import('./pages/weapons-detail/weapons-detail.module').then(m => m.WeaponsDetailModule)
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
