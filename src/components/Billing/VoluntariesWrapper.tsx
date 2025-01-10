import { useNavigate } from "react-router-dom";
import { settings } from "../../settings"
import './VoluntariesWrapper.scss'

const VoluntariesWrapper = () => {
    const navigate = useNavigate();

    const handleClickToBilling = () => {
        navigate("/billing");
    }
    return (
        <div>
            <button className="base-btn" onClick={handleClickToBilling}>Vissza a számlázásra</button>
            {settings.VOLUNTARIES.map(voluntary => {
                return (
                    <div key={voluntary.id} className="single-voluntary">
                        <div className="voluntary-icon-wrapper">
                            <img src={voluntary.icon} alt="" />
                        </div>
                        <div className="voluntary-text-wrapper">
                            <p className="voluntary-amount">{voluntary.amount}/hó</p>
                            <h2>{voluntary.title}</h2>
                            <p className="voluntary-text">{voluntary.text}</p>
                        </div>
                        <div>
                            <input type="radio" name="" id="" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default VoluntariesWrapper   