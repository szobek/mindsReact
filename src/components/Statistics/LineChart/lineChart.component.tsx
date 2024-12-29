import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = () => {

    const options = {
        chart: {
          type: 'line'
        },
        title: {
          text: 'My chart'
        },
        series: [
          {
            data: [1, 2, 1, 4, 3, 6]
          }
        ]
      };

    return (
        <div>
            <h1>Line Chart</h1>
            <HighchartsReact  highcharts={Highcharts} options={options} />
        </div>
    )
}

export default LineChart;   