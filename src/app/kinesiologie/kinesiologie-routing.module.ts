import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { KinesiologieComponent } from './kinesiologie.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'kinesiologie', component: KinesiologieComponent, data: { title: extract('Kinésiologie') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class KinesiologieRoutingModule {}
