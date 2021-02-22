import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { MentionsLegalesComponent } from '@app/mentions-legales/mentions-legales.component';
import { PlanSiteComponent } from '@app/plan-site/plan-site.component';
import { Shell } from '@app/shell/shell.service';
import { HomeComponent } from '@app/home/home.component';
import { extract } from '@app/i18n';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
    { path: 'contact', loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule) },
    { path: 'qui-suis-je', loadChildren: () => import('./histoire/histoire.module').then((m) => m.HistoireModule) },
    {
      path: 'kinesiologie',
      loadChildren: () => import('./kinesiologie/kinesiologie.module').then((m) => m.KinesiologieModule),
    },
    {
      path: 'soins-energetiques',
      loadChildren: () =>
        import('./soins-energetiques/soins-energetiques.module').then((m) => m.SoinsEnergetiquesModule),
    },
    { path: 'mentions-legales', component: MentionsLegalesComponent, data: { title: extract('Mentions légales') } },
    { path: 'plan-du-site', component: PlanSiteComponent, data: { title: extract('Plan du site') } },
  ]),
  // Fallback when no prior route is matched
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
