import { Component } from '@angular/core';
import { Link, linkList, otherLinkList } from '@shared/constants/links-constants';

@Component({
  selector: 'app-plan-site',
  templateUrl: './plan-site.component.html',
  styleUrls: ['./plan-site.component.scss'],
})
export class PlanSiteComponent {
  public get otherLinks(): Link[] {
    return otherLinkList;
  }
  public get links(): Link[] {
    return linkList;
  }
}
