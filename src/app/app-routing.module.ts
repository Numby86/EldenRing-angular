import { LoggedGuard } from './pages/create-character/guards/logged.guard';
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
    path: 'armors',
    loadChildren: () => import('./pages/armors/armors.module').then(m => m.ArmorsModule)
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
    path: 'characters',
    loadChildren: () => import('./pages/characters/character.module').then(m => m.CharacterModule)
  },
  {
    path: 'character-detail/:id',
    loadChildren: () => import('./pages/characters-detail/characters-detail.module').then(m => m.CharactersDetailModule)
  },
  {
    path: 'create-character',
    loadChildren: () => import('./pages/create-character/create-character.module').then(m => m.CreateCharacterModule)
    ,
    canActivate: [LoggedGuard]
  },
  {
    path: 'incantations',
    loadChildren: () => import('./pages/incantations/incantations.module').then(m => m.IncantationsModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./pages/items/items.module').then(m => m.ItemsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/user-login/user-login.module').then(m => m.UserLoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/user-register/user-register.module').then(m => m.UserRegisterModule)
  },
  {
    path: 'talismans',
    loadChildren: () => import('./pages/talismans/talismans.module').then(m => m.TalismansModule)
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
