import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const UniversalChart = ({ options }: any) => {
  return (<HighchartsReact highcharts={Highcharts} options={options} />)
};

export default UniversalChart;