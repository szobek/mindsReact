import LineChart from './LineChart/LineChart';
import ColumnChart from './ColumnChart/ColumnChart';
import './ChartWrapper.scss';
import PieChart from './PieChart/PieChart';
import SpiderwebChart from './SpiderWebChart/SpiderwebChart';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ChartWrapper = () => {
    const navigate  = useNavigate();
    return (
        <div className='chart-container'>
            <h1>Statisztika</h1>
            <div className="chart-card double">
                <Card>
                    <Card.Header>
                        <LineChart previewChart={true}/>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Line chart</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        <Button onClick={()=>{
                            navigate('/statistics/linechart')
                        }} variant="primary">Go chart </Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="chart-card">
            <Card>
                    <Card.Header>
                    <PieChart />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Pie chart</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        <Button onClick={()=>{
                            navigate('/statistics/piechart')
                        }} variant="primary">Go chart </Button>
                    </Card.Body>
                </Card>
                
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