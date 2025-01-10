import { useNavigate } from "react-router-dom";
import { settings } from "../../settings"
import './VoluntariesWrapper.scss'
import { useState } from "react";
import { getVoluntaryById } from "../../functions";

const VoluntariesWrapper = () => {
    const [selectedOption,setSelectedOption] = useState(0);
    const navigate = useNavigate();

    const handleClickToBilling = () => {
        navigate("/billing");
    }
    const handleClickOnVoluntryOption=(id:number)=>{
setSelectedOption(id);
console.log(getVoluntaryById(id));

    }
    return (
        <div>
            <button className="base-btn" onClick={handleClickToBilling}>Vissza a számlázásra</button>
            {settings.VOLUNTARIES.map(voluntary => {
                return (
                    <div key={voluntary.id} className={`single-voluntary ${(selectedOption===voluntary.id)?"selected-option":""}`} onClick={()=>{
                        handleClickOnVoluntryOption(voluntary.id);
                    }}>
                        <div className="voluntary-icon-wrapper">
                            <img src={voluntary.icon} alt="" />
                        </div>
                        <div className="voluntary-text-wrapper">
                            <p className="voluntary-amount">{voluntary.amount}/hó</p>
                            <h2>{voluntary.title}</h2>
                            <p className="voluntary-text">{voluntary.text}</p>
                        </div>
                        <div className="voluntary-radio-wrapper">
                            <input type="radio" checked={selectedOption===voluntary.id} name="" id="" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default VoluntariesWrapper   