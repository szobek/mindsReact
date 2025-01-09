import LineChart from './LineChart/LineChart';
import ColumnChart from './ColumnChart/ColumnChart';
import './ChartWrapper.scss';
import PieChart from './PieChart/PieChart';
import SpiderwebChart from './SpiderWebChart/SpiderwebChart';

const ChartWrapper = () => {
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
                <SpiderwebChart />
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

export default ChartWrapper;