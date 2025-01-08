import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts);

const SpiderwebChart = () => {
    const options = {
        chart: {
            polar: true,
        },
        title: {
            text: 'Kahn Chart'
        },
        pane: {
            startAngle: 0,
            endAngle: 360
        },
        xAxis: {
            tickInterval: 90,
            min: 0,
            max: 360,
            labels: {
                format: '{value}°'
            }
        },
        yAxis: {
            min: 0,
            max: 10,
        },
        plotOptions: {
            series: {
                pointStart: 0,
                pointInterval: 90
            },
            column: {
                pointPadding: 0,
                groupPadding: 0
            }
        },
        series: [
            {
                type: 'area',
                name: 'c1',
                data: [7.15, 10, 9.85, 8.81],
            },
            {
                type: 'line',
                name: 'c2',
                data: [4.65, 3.16, 4.30, 4.48],
            },
            {
                type: 'line',
                name: 'Fair Value',
                data: [4.77, 6.67, 6.57, 5.87],
            }
        ]
    };


    return (<HighchartsReact highcharts={Highcharts} options={options} />);
};

export default SpiderwebChart;
