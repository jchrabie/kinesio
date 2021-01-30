import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { linkList } from '@app/@shared/constants/links-constants';

@Component({
  templateUrl: './soins-energetiques.component.html',
  styleUrls: ['./soins-energetiques.component.scss'],
})
export class SoinsEnergetiquesComponent implements OnInit {
  public title: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    linkList
      .filter((link) => link.children)
      .forEach((link) => (this.title = link.children.find((child) => child.url === this.router.url).name));
  }
}
