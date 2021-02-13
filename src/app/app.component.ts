import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, untilDestroyed } from '@core';
import { I18nService } from '@app/i18n';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from '@shared/services/local-storage.service';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('content') content: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translateService: TranslateService,
    private localStorageService: LocalStorageService,
    private i18nService: I18nService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

    const onNavigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));

    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
        untilDestroyed(this)
      )
      .subscribe((event) => {
        const title = event.title;
        if (title) {
          this.titleService.setTitle(`Diane de Sagazan - ${this.translateService.instant(title)}`);
        }
      });
  }

  ngAfterViewInit() {
    if (!this.localStorageService.getItem('cookie')) {
      this.open(this.content);
      this.localStorageService.setItem('cookie', 'true');
    }
  }

  open(content: NgbModal) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      windowClass: 'big-border',
    });
  }

  ngOnDestroy() {
    this.i18nService.destroy();
  }
}
