import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import {NouisliderModule} from 'ng2-nouislider';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { NgxSelectModule } from 'ngx-select-ex';
import { HomeFeaturedComponent } from './home-featured/home-featured.component';
import { HomeWhyUsComponent } from './home-why-us/home-why-us.component';
import { HomePromotionComponent } from './home-promotion/home-promotion.component';
import { HomeRecentComponent } from './home-recent/home-recent.component';
import { HomeTeamComponent } from './home-team/home-team.component';
import { HomePartnersComponent } from './home-partners/home-partners.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeFeaturedComponent,
    HomeWhyUsComponent,
    HomePromotionComponent,
    HomeRecentComponent,
    HomeTeamComponent,
    HomePartnersComponent
  ],
  imports: [
    BrowserModule,
    NouisliderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOe3n9Rms8qQ1eXuuWX5jsKjha1iY6iyk'
    }),
    FormsModule,
    CommonModule,
    NgxSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
