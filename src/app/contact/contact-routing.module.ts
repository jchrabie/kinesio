import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { Shell } from '@app/shell/shell.service';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'contact', component: ContactComponent, data: { title: extract('Contact') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ContactRoutingModule {}
