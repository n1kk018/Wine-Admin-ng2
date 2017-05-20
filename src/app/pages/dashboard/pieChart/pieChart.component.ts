import {Component, Input, OnInit } from '@angular/core';

import {PieChartService} from './pieChart.service';

import 'easy-pie-chart/dist/jquery.easypiechart.js';
import { EntityDashboard } from '../../../entities/entityDashboard';

@Component({
  selector: 'pie-chart',
  templateUrl: './pieChart.html',
  styleUrls: ['./pieChart.scss']
})
// TODO: move easypiechart to component
export class PieChart implements OnInit{

  @Input() dashInitVars: EntityDashboard

  public charts: Array<Object>;
  private _init = false;
  public indexPieCharts: number;
  constructor(private _pieChartService: PieChartService) {
    this.indexPieCharts = 0;
    if (this.indexPieCharts = 0) {
      localStorage.setItem('indexPieCharts',''+this.indexPieCharts);
    }
  }

 ngOnInit(){
   if (this.dashInitVars) {
     this.charts = this._pieChartService.getData(this.dashInitVars);
     }
 }

  ngAfterViewInit() {
    if (!this._init) {
      this._loadPieCharts();
      this._updatePieCharts();
      this._init = true;
    }
  }

  private _loadPieCharts() {

    jQuery('.chart').each(function () {
      let chart = jQuery(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: jQuery(this).attr('data-rel'),
        trackColor: 'rgba(0,0,0,0)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });
  }

  private _updatePieCharts() {

    let getRandomArbitrary = (min, max) => {
      return Math.random() * (max - min) + min;
    };
    let getOnWinePercent = () => {
      let temp = 0;
      temp = +localStorage.getItem('indexPieCharts') + 1;
      localStorage['indexPieCharts'] = temp;
      if (temp == 1) {
        return 80;
      } else if (temp == 2){
        return 88;
      } else if (temp == 3){
        return 9
      } else {
        if (+localStorage.getItem('indexPieCharts') > 3) {
          localStorage['indexPieCharts'] = ''+0;
        }
        return 85
      }

    };

    jQuery('.pie-charts .chart').each(function(index, chart) {
      jQuery(chart).data('easyPieChart').update(getOnWinePercent());
    });
  }
}
