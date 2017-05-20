import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { EntityDashboard } from '../../../entities/entityDashboard';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }


  getData(initVars: EntityDashboard) {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: initVars.wineDistribution[0].split(':')[1],
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'White Wine',
        percentage: 21,
        order: 1,
      }, {
        value: initVars.wineDistribution[1].split(':')[1],
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Red Wine',
        percentage: 22,
        order: 4,
      }, {
        value: initVars.wineDistribution[2].split(':')[1],
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Champagne',
        percentage: 87,
        order: 3,
      }, {
        value: initVars.wineDistribution[3].split(':')[1],
        color: dashboardColors.surfieGreen,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Rosé',
        percentage: 38,
        order: 2,
      }, {
        value: 4000,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Other',
        percentage: 15,
        order: 0,
      },
    ];
  }
}
