import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBtnComponent } from './contact-btn/contact-btn.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ContactBtnComponent],
  exports: [ContactBtnComponent],
})
export class SharedModule {}
