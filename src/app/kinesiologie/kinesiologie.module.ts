import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/@shared';

import { KinesiologieRoutingModule } from './kinesiologie-routing.module';
import { KinesiologieComponent } from './kinesiologie.component';

@NgModule({
  imports: [KinesiologieRoutingModule, CommonModule, SharedModule],
  declarations: [KinesiologieComponent],
})
export class KinesiologieModule {}
