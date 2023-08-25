import { BaseChart } from "../BaseChart";

export default class LineChart extends BaseChart {
  type: string = 'line'
  
  step: boolean = false
  
  xData: string[] = ['a', 'b', 'c']
  
  seriesData: number[] = [100, 200, 300] 
}
