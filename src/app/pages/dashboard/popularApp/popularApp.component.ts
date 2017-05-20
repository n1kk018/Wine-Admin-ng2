import {Component} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

@Component({
  selector: 'popular-app',
  templateUrl: './popularApp.html',
  styleUrls: ['./popularApp.scss']
})
export class PopularApp {

  _data = {
    simpleLineOptions: {
      color: {
        blueStone: '#40daf1',
        surfieGreen: '#00abff',
        silverTree: '#1b70ef',
        gossip: '#3c4eb9',
        white: '#ffffff',
      },
      fullWidth: true,
      height: '300px',
      chartPadding: {
        right: 40
      }
    },
    simpleLineData: {
      labels: ['Dec', 'Jan', 'Feb', 'Mar'],
      series: [
        [70, 55, 25 ,30],
        [12,14, 30, 45],
        [40, 50,12, 12],
        [43, 25, 22, 16],
        [3, 6, 30, 33]
      ]
    }
  }

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  ngOnInit() {

  }
}
