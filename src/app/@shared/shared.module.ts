import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBtnComponent } from './contact-btn/contact-btn.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContactBtnComponent],
  exports: [ContactBtnComponent],
})
export class SharedModule {}
