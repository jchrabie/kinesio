import { NgModule } from '@angular/core';
import { SharedModule } from '@app/@shared';

import { SoinsEnergetiquesRoutingModule } from './soins-energetiques-routing.module';
import { SoinsEnergetiquesComponent } from './soins-energetiques.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SoinsEnergetiquesRoutingModule, SharedModule, CommonModule],
  declarations: [SoinsEnergetiquesComponent],
})
export class SoinsEnergetiquesModule {}
