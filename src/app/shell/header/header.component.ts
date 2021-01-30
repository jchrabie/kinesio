import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';

import { Link, linkList } from '@app/@shared/constants/links-constants';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChildren('dropdownItem') dropdownItems!: QueryList<ElementRef<HTMLElement>>;

  public menuHidden = true;
  public hasChildrenActive: boolean;
  public get links(): Link[] {
    return linkList;
  }

  constructor(private router: Router) {
    this.router.events.pipe(delay(100)).subscribe(() => {
      this.hasChildrenActive = !!this.dropdownItems
        .toArray()
        .find((el) => el.nativeElement.classList.contains('active'));
    });
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }
}
