import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from 'highcharts/highcharts-3d';

highcharts3d(Highcharts);

const ColumnChart = () => {
    const options = {
        navigation: {
          buttonOptions: {
            enabled: false,
          },
        },
        chart: {
          renderTo: 'container',
          type: 'column',
          margin: 75,
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25,
          },
        },
        title: {
          text: '',
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'March'],
        },
        yAxis: { labels: { step: 1 } },
        plotOptions: {
          column: {
            groupZPadding: 10,
            depth: 100,
            groupPadding: 0,
            grouping: false,
          },
        },
        series: [
          {
            data: [10, 20, 40],
            type: 'column',
          },
          {
            data: [22,55,42],
            type: 'column',
          },
          {
            data: [33,62,77],
            type: 'column',
          },
        ],
      };
    return (<><HighchartsReact highcharts={Highcharts} options={options} /></>)
}
export default ColumnChart;