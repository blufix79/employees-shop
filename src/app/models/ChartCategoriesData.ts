import { StatsCategoriesData } from './StatsCategoriesData';
import { Label, SingleDataSet } from 'ng2-charts';

export class ChartCategoriesData{
  private labels: Label[];
  private data: SingleDataSet;

  get Labels():Label[]{return this.labels;}
  get Data():SingleDataSet{return this.data;}

  constructor(private statsCategoriesData: StatsCategoriesData[]){
    this.PrepareDataForChart()
  }

  private PrepareDataForChart() {
    let labels: string[] = [];
    let data: number[] = [];
    this.statsCategoriesData.forEach(element => {
      const normalizedCategory = this.NormalizeCategory(element.category);
      const categoryInLabels = labels.indexOf(normalizedCategory);
      if (categoryInLabels === -1) {
        labels.push(normalizedCategory);
        data.push(element.numberOfProducts);
      }
      else {
        data[categoryInLabels] += element.numberOfProducts;
      }
    });
    this.labels = labels;
    this.data = data;
  }

  private NormalizeCategory(category: string): string{
    let normalized = category.toLowerCase();
    let firstChar = normalized.charAt(0).toUpperCase();
    normalized = normalized.replace(normalized.charAt(0),firstChar);
    return normalized;
  }
}
