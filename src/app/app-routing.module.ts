import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

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
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
