import { NgModule } from '@angular/core';
import { SharedModule } from '@app/@shared';

import { SoinsEnergetiquesRoutingModule } from './soins-energetiques-routing.module';
import { SoinsEnergetiquesComponent } from './soins-energetiques.component';

@NgModule({
  imports: [SoinsEnergetiquesRoutingModule, SharedModule],
  declarations: [SoinsEnergetiquesComponent],
})
export class SoinsEnergetiquesModule {}
