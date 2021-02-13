import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Link, linkList } from '@app/@shared/constants/links-constants';

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

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleMenu() {
    if (this.breakpointObserver.isMatched('(max-width: 991px)')) {
      this.menuHidden = !this.menuHidden;
    }
  }
}
