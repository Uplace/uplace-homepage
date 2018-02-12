import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  mapStyles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#c6c6c6"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#dde6e8"},{"visibility":"on"}]}];

  public items: any[] = [
    {
      id: 100,
      text: 'Austria',
      children: [
        {id: 54, text: 'Vienna'}
      ]
    },
    {
      id: 200,
      text: 'Belgium',
      children: [
        {id: 2, text: 'Antwerp'},
        {id: 9, text: 'Brussels'}
      ]
    },
    {
      id: 300,
      text: 'Bulgaria',
      children: [
        {id: 48, text: 'Sofia'}
      ]
    },
    {
      id: 400,
      text: 'Croatia',
      children: [
        {id: 58, text: 'Zagreb'}
      ]
    },
    {
      id: 500,
      text: 'Czech Republic',
      children: [
        {id: 42, text: 'Prague'}
      ]
    },
    {
      id: 600,
      text: 'Denmark',
      children: [
        {id: 13, text: 'Copenhagen'}
      ]
    },
    {
      id: 700,
      text: 'England',
      children: [
        {id: 6, text: 'Birmingham'},
        {id: 7, text: 'Bradford'},
        {id: 26, text: 'Leeds', disabled: true},
        {id: 30, text: 'London'},
        {id: 34, text: 'Manchester'},
        {id: 47, text: 'Sheffield'}
      ]
    },
    {
      id: 800,
      text: 'Finland',
      children: [
        {id: 25, text: 'Helsinki'}
      ]
    },
    {
      id: 900,
      text: 'France',
      children: [
        {id: 35, text: 'Marseille'},
        {id: 40, text: 'Paris'}
      ]
    },
    {
      id: 1000,
      text: 'Germany',
      children: [
        {id: 5, text: 'Berlin'},
        {id: 8, text: 'Bremen'},
        {id: 12, text: 'Cologne'},
        {id: 14, text: 'Dortmund'},
        {id: 15, text: 'Dresden'},
        {id: 17, text: 'Düsseldorf'},
        {id: 18, text: 'Essen'},
        {id: 19, text: 'Frankfurt'},
        {id: 23, text: 'Hamburg'},
        {id: 24, text: 'Hannover'},
        {id: 27, text: 'Leipzig'},
        {id: 37, text: 'Munich'},
        {id: 50, text: 'Stuttgart'}
      ]
    },
    {
      id: 1100,
      text: 'Greece',
      children: [
        {id: 3, text: 'Athens'}
      ]
    },
    {
      id: 1200,
      text: 'Hungary',
      children: [
        {id: 11, text: 'Budapest'}
      ]
    },
    {
      id: 1300,
      text: 'Ireland',
      children: [
        {id: 16, text: 'Dublin'}
      ]
    },
    {
      id: 1400,
      text: 'Italy',
      children: [
        {id: 20, text: 'Genoa'},
        {id: 36, text: 'Milan'},
        {id: 38, text: 'Naples'},
        {id: 39, text: 'Palermo'},
        {id: 44, text: 'Rome'},
        {id: 52, text: 'Turin'}
      ]
    },
    {
      id: 1500,
      text: 'Latvia',
      children: [
        {id: 43, text: 'Riga'}
      ]
    },
    {
      id: 1600,
      text: 'Lithuania',
      children: [
        {id: 55, text: 'Vilnius'}
      ]
    },
    {
      id: 1700,
      text: 'Netherlands',
      children: [
        {id: 1, text: 'Amsterdam'},
        {id: 45, text: 'Rotterdam'},
        {id: 51, text: 'The Hague'}
      ]
    },
    {
      id: 1800,
      text: 'Poland',
      children: [
        {id: 29, text: 'Łódź'},
        {id: 31, text: 'Kraków'},
        {id: 41, text: 'Poznań'},
        {id: 56, text: 'Warsaw'},
        {id: 57, text: 'Wrocław'}
      ]
    },
    {
      id: 1900,
      text: 'Portugal',
      children: [
        {id: 28, text: 'Lisbon'}
      ]
    },
    {
      id: 2000,
      text: 'Romania',
      children: [
        {id: 10, text: 'Bucharest'}
      ]
    },
    {
      id: 2100,
      text: 'Scotland',
      children: [
        {id: 21, text: 'Glasgow'}
      ]
    },
    {
      id: 2200,
      text: 'Spain',
      children: [
        {id: 4, text: 'Barcelona'},
        {id: 32, text: 'Madrid'},
        {id: 33, text: 'Málaga'},
        {id: 46, text: 'Seville'},
        {id: 53, text: 'Valencia'},
        {id: 59, text: 'Zaragoza'}
      ]
    },
    {
      id: 2300,
      text: 'Sweden',
      children: [
        {id: 22, text: 'Gothenburg'},
        {id: 49, text: 'Stockholm'}
      ]
    }
  ];

  public ngxValue: any[] = [];

  filterBedrooms = 0;
  filterbathrooms = 0;

  showAdvancedSearch = true;
  openSelect = false;
  showFilter = false;

  latitude = 51.678418;
  longitude = 7.809007;

  someRange: [number, number] = [0, 50];

  onShowAdvancedSearch() {
    this.showAdvancedSearch = !this.showAdvancedSearch;
  }

  onShowFilter() {
    this.showFilter = !this.showFilter;
  }

  onOpenSelect() {
    this.openSelect = !this.openSelect;
  }

  increment(variable: number) {
    this.filterBedrooms += 1;
  }

  decrement(variable: number) {
    if (this.filterBedrooms > 0) {
      this.filterBedrooms -= 1;
    }
  }


}
