import {Component, Input, OnInit} from '@angular/core';

import {TrafficChartService} from './trafficChart.service';
import { EntityDashboard } from '../../../entities/entityDashboard';

import * as Chart from 'chart.js';

@Component({
  selector: 'traffic-chart',
  templateUrl: './trafficChart.html',
  styleUrls: ['./trafficChart.scss']
})

// TODO: move chart.js to it's own component
export class TrafficChart {
  @Input() dashInitVars: EntityDashboard
  public doughnutData: Array<Object>;

  public totalWine: number;

  constructor(private trafficChartService:TrafficChartService) {

  }
  ngOnInit(){
    if (this.dashInitVars) {
      this.doughnutData = this.trafficChartService.getData(this.dashInitVars);
      this.totalWine    = +this.dashInitVars.wineDistribution[0].split(':')[1]+ +this.dashInitVars.wineDistribution[1].split(':')[1]+
        +this.dashInitVars.wineDistribution[2].split(':')[1]+ +this.dashInitVars.wineDistribution[3].split(':')[1]+ 4000
    }
  }

  ngAfterViewInit() {
    this._loadDoughnutCharts();
  }

  private _loadDoughnutCharts() {
    let el = jQuery('.chart-area').get(0) as HTMLCanvasElement;
    new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
      segmentShowStroke: false,
      percentageInnerCutout : 64,
      responsive: true
    });
  }
}
