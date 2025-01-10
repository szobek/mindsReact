import { useNavigate } from "react-router-dom";
import './ChartTitle.scss';
export type ChartTitleProps = {
    title: string;
}

const ChartTitle = ({ title }: ChartTitleProps) => {
    const navigate = useNavigate();
    return (
        <div className="chart-title">
            <h3>{title}</h3>
            <button onClick={() => {
                navigate('/statistics')
            }} className="base-btn" 
            >
                Vissza a listához
            </button>
        </div>
    )
};

export default ChartTitle;