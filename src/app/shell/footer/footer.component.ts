import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Link, linkList, otherLinkList } from '@shared/constants/links-constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  public year: number;
  public get otherLinks(): Link[] {
    return otherLinkList;
  }
  public get links(): Link[] {
    return linkList;
  }

  constructor() {}

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
}
