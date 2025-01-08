import UniversalChart from '../UniversalChart';

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
    <UniversalChart options={options} />
  )
}

export default LineChart;   