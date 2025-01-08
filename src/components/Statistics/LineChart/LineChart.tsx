import UniversalChart from '../universalChart.component';

const LineChart = () => {

    const options = {
        chart: {
          type: 'line'
        },
        title: {
          text: ''
        },
        series: [
          {
            data: [1, 2, 1, 4, 3, 6]
          }
        ]
      };

    return (
        <div>
          <UniversalChart options={options}/>
            
        </div>
    )
}

export default LineChart;   