import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {HomeService} from './home.service';
import {AgmMap} from '@agm/core';
import {HomeMapComponent} from './home-map/home-map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  filterOpen;

  openSelect = false;

  horizontalResults = false;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.change.subscribe((isOpen: boolean) => {
      this.filterOpen = isOpen;
    });
  }

  toggleOrientationHorizontal(value: boolean) {
    this.horizontalResults = value;
  }

}
