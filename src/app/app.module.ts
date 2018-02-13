import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import {NouisliderModule} from 'ng2-nouislider';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { NgxSelectModule } from 'ngx-select-ex';
import { HomeFeaturedComponent } from './sections/home-featured/home-featured.component';
import { HomeWhyUsComponent } from './sections/home-why-us/home-why-us.component';
import { HomePromotionComponent } from './sections/home-promotion/home-promotion.component';
import { HomeRecentComponent } from './sections/home-recent/home-recent.component';
import { HomeTeamComponent } from './sections/home-team/home-team.component';
import { HomePartnersComponent } from './sections/home-partners/home-partners.component';
import { HomeMapComponent } from './home-map/home-map.component';
import {HomeService} from './home.service';
import { HomeFilterComponent } from './home-filter/home-filter.component';
import { HomeFilterItemComponent } from './home-filter-item/home-filter-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeFeaturedComponent,
    HomeWhyUsComponent,
    HomePromotionComponent,
    HomeRecentComponent,
    HomeTeamComponent,
    HomePartnersComponent,
    HomeMapComponent,
    HomeFilterComponent,
    HomeFilterItemComponent
  ],
  imports: [
    BrowserModule,
    NouisliderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOe3n9Rms8qQ1eXuuWX5jsKjha1iY6iyk',
      libraries: ['places']
    }),
    FormsModule,
    CommonModule,
    NgxSelectModule

  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
