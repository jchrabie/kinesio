import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-btn',
  templateUrl: './contact-btn.component.html',
  styleUrls: ['./contact-btn.component.scss'],
})
export class ContactBtnComponent {
  @Input() secondary = false;
}
