import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { MentionsLegalesComponent } from '@app/mentions-legales/mentions-legales.component';
import { PlanSiteComponent } from '@app/plan-site/plan-site.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'contact', loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule) },
    { path: 'histoire', loadChildren: () => import('./histoire/histoire.module').then((m) => m.HistoireModule) },
    {
      path: 'kinesiologie',
      loadChildren: () => import('./kinesiologie/kinesiologie.module').then((m) => m.KinesiologieModule),
    },
    {
      path: 'soins-energetiques',
      loadChildren: () =>
        import('./soins-energetiques/soins-energetiques.module').then((m) => m.SoinsEnergetiquesModule),
    },
    { path: 'mentions-legales', component: MentionsLegalesComponent },
    { path: 'plan-du-site', component: PlanSiteComponent },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
