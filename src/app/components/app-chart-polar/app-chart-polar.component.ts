import { ChartCategoriesData } from './../../models/ChartCategoriesData';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Label, SingleDataSet, BaseChartDirective } from 'ng2-charts';
import { ChartType, Chart } from 'chart.js';
import { StatsCategoriesData } from 'src/app/models/StatsCategoriesData';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-chart-polar',
  templateUrl: './app-chart-polar.component.html',
  styleUrls: ['./app-chart-polar.component.scss']
})
export class AppChartPolarComponent implements OnInit {
  public chart;
  public charCategoriesData: ChartCategoriesData;
  public statsCategoriesData: StatsCategoriesData[];

  public polarAreaChartLabels: Label[];
  public polarAreaChartData: SingleDataSet;
  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'polarArea';

  constructor(private statSevice: StatsService) {}

  ngOnInit() {
    this.statSevice.getCategoriesData()
      .subscribe((data: StatsCategoriesData[]) => {
        this.statsCategoriesData = data;
        this.charCategoriesData = new ChartCategoriesData(data);
        this.polarAreaChartLabels = this.charCategoriesData.Labels;
        this.polarAreaChartData = this.charCategoriesData.Data;
      });
  }

}
