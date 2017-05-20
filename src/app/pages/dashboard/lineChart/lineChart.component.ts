import {Component} from '@angular/core';

import {LineChartService} from './lineChart.service';

@Component({
  selector: 'line-chart',
  templateUrl: './lineChart.html',
  styleUrls: ['./lineChart.scss']
})
export class LineChart {

  chartData:Object;

  constructor(private _lineChartService:LineChartService) {
    this.chartData = this._lineChartService.getData();
  }

  initChart(chart:any) {
    let zoomChart = () => {
      chart.zoomToDates(new Date(2015, 12), new Date(2017, 2));
    };

    chart.addListener('rendered', zoomChart);
    zoomChart();

    if (chart.zoomChart) {
      chart.zoomChart();
    }
  }
}
