import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { SoinsEnergetiquesComponent } from './soins-energetiques.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'soins-energetiques/personne',
      component: SoinsEnergetiquesComponent,
      data: { title: extract('Soins Energétiques à la personne') },
    },
    {
      path: 'soins-energetiques/lieu-de-vie',
      component: SoinsEnergetiquesComponent,
      data: { title: extract('Soins Energétiques au lieu de vie') },
    },
    { path: '**', redirectTo: 'soins-energetiques', pathMatch: 'full' },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SoinsEnergetiquesRoutingModule {}
