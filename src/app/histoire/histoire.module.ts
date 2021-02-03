import { NgModule } from '@angular/core';
import { SharedModule } from '@app/@shared';

import { HistoireRoutingModule } from './histoire-routing.module';
import { HistoireComponent } from './histoire.component';

@NgModule({
  imports: [SharedModule, HistoireRoutingModule],
  declarations: [HistoireComponent],
})
export class HistoireModule {}
