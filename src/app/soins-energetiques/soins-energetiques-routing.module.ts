import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { SoinsEnergetiquesComponent } from './soins-energetiques.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'soins-energetiques',
      component: SoinsEnergetiquesComponent,
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SoinsEnergetiquesRoutingModule {}
