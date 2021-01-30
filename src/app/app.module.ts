import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angulartics2Module } from 'angulartics2';
import { InViewportModule } from 'ng-in-viewport';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HistoireModule } from './histoire/histoire.module';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactModule } from './contact/contact.module';
import { KinesiologieModule } from './kinesiologie/kinesiologie.module';
import { SoinsEnergetiquesModule } from './soins-energetiques/soins-energetiques.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    CommonModule,
    HomeModule,
    HistoireModule,
    ContactModule,
    KinesiologieModule,
    SoinsEnergetiquesModule,
    InViewportModule,
    Angulartics2Module.forRoot(),
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
