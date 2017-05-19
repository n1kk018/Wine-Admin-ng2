import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { EntityDashboard } from '../../../entities/entityDashboard';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData(initVars: EntityDashboard) {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'dashboard.new_visits',
        stats: ''+initVars.loginLastMonth,
        icon: 'person',
      }, {
        color: pieColor,
        description: 'dashboard.purchases',
        stats: '$ 589,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'dashboard.active_users',
        stats: ''+initVars.activeUsers,
        icon: 'face',
      }, {
        color: pieColor,
        description: 'dashboard.returned',
        stats: '32,592',
        icon: 'refresh',
      }
    ];
  }
}
