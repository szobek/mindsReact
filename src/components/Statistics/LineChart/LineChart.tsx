import { useState } from 'react';
import { settings } from '../../../settings';
import UniversalChart from '../UniversalChart';
export type LineChartProps = {
  previewChart?: boolean;
}
const LineChart = ({ previewChart }: LineChartProps) => {
  const [chartData, setChartData] = useState<number[]>([2,3,11,12,23,3,8,12]);
  const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: ''
    },
    series: [
      {
        data: chartData
      }
    ]
  };
  const viewActive=()=>{
    fetch(`${settings.BASE_URL}/todos`)
    .then(()=>setChartData([2,5,9,6]))
  }
  if (previewChart) {
      viewActive()
  }


  return (
    <UniversalChart options={options} />
  )
}

export default LineChart;   