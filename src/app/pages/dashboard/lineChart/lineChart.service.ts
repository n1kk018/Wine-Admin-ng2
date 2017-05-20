import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper, layoutPaths} from '../../../theme';

@Injectable()
export class LineChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {

    var layoutColors = this._baConfig.get().colors;
    var graphColor = this._baConfig.get().colors.custom.dashboardLineChart;

    return {
      type: 'serial',
      theme: 'blur',
      marginTop: 15,
      marginRight: 15,
      responsive: {
        'enabled': true
      },
      dataProvider: [
        { date: new Date(2014, 11), value: 0, value0: 0 },
        { date: new Date(2015, 0), value: 15000, value0: 19000},
        { date: new Date(2015, 1), value: 30000, value0: 20000},


        { date: new Date(2015, 2), value: 25000, value0: 22000},
        { date: new Date(2015, 3), value: 21000, value0: 25000},
        { date: new Date(2015, 4), value: 24000, value0: 29000},
        { date: new Date(2015, 5), value: 31000, value0: 26000},
        { date: new Date(2015, 6), value: 40000, value0: 25000},
        { date: new Date(2015, 7), value: 37000, value0: 20000},
        { date: new Date(2015, 8), value: 18000, value0: 22000},
        { date: new Date(2015, 9), value: 5000, value0: 26000},
        { date: new Date(2015, 10), value: 40000, value0: 30000},
        { date: new Date(2015, 11), value: 20000, value0: 25000},
        { date: new Date(2016, 0), value: 5000, value0: 10000},

        { date: new Date(2016, 1), value: 3000, value0: 15000},
        { date: new Date(2016, 2), value: 1800, value0: 15000},
        { date: new Date(2016, 3), value: 10400, value0: 15000},
        { date: new Date(2016, 4), value: 25500, value0: 15000},
        { date: new Date(2016, 5), value: 2100, value0: 15000},
        { date: new Date(2016, 6), value: 6500, value0: 15000},
        { date: new Date(2016, 7), value: 1100, value0: 15000},
        { date: new Date(2016, 8), value: 17200, value0: 15000},
        { date: new Date(2016, 9), value: 26900, value0: 15000},
        { date: new Date(2016, 10), value: 14100, value0: 15000},
        { date: new Date(2016, 11), value: 35300, value0: 15000},
        { date: new Date(2017, 0), value: 54800, value0: 15000},
        { date: new Date(2017, 1), value: 49800, value0: 15000}
      ],
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        gridAlpha: 0,
        color: layoutColors.defaultText,
        axisColor: layoutColors.defaultText
      },
      valueAxes: [
        {
          minVerticalGap: 50,
          gridAlpha: 0,
          color: layoutColors.defaultText,
          axisColor: layoutColors.defaultText
        }
      ],
      graphs: [
        {
          id: 'g0',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.3),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value0',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        },
        {
          id: 'g1',
          bullet: 'none',
          useLineColorForBulletBorder: true,
          lineColor: colorHelper.hexToRgbA(graphColor, 0.15),
          lineThickness: 1,
          negativeLineColor: layoutColors.danger,
          type: 'smoothedLine',
          valueField: 'value',
          fillAlphas: 1,
          fillColorsField: 'lineColor'
        }
      ],
      chartCursor: {
        categoryBalloonDateFormat: 'MM YYYY',
        categoryBalloonColor: '#4285F4',
        categoryBalloonAlpha: 0.7,
        cursorAlpha: 0,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        valueLineAlpha: 0.5
      },
      dataDateFormat: 'MM YYYY',
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      zoomOutButton: {
        backgroundColor: '#fff',
        backgroundAlpha: 0
      },
      zoomOutText: '',
      pathToImages: layoutPaths.images.amChart
    };
  }
}
