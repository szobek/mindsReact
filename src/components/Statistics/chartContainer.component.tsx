import LineChart from './LineChart/lineChart.component';
import ColumnChart from './ColumnChart/columnChart.component';
import './chartContainer.component.scss';
import PieChart from './PieChart/PieChart.component';
const ChartContainer = () => {



    return (
        <div className='chart-container'>
            <h1>Statisztika</h1>
            <div className="chart-card double">
                <LineChart />
            </div>
            <div className="chart-card">
                <PieChart />
            </div>
            <div className="chart-card">
                <ColumnChart />
            </div>
            <div className="chart-card double">
                <ColumnChart />
            </div>
            <div className="chart-card">
                <ColumnChart />
            </div>
            <div className="chart-card">
                <ColumnChart />
            </div>
        </div>
    )
}

export default ChartContainer;