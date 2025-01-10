import { Voluntary } from "../../models/Voluntary";
import "./VoluntaryOption.scss"
export type VoluntaryType = {
    voluntary: Voluntary
    selectedOption: number
    handleClickOnVoluntryOption: Function
}

const VoluntaryOption = ({ voluntary,selectedOption,handleClickOnVoluntryOption }: VoluntaryType) => {
   const handleOnChangeOnOption=(voluntary:Voluntary)=>{
    handleClickOnVoluntryOption(voluntary.id);
   }
    return (
        <div>
            <div className={`single-voluntary ${(selectedOption === voluntary.id) ? "selected-option" : ""}`} onClick={() => {
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
                    <input type="radio" 
                    checked={selectedOption === voluntary.id} 
                    name="voluntary-option" 
                    id="" 
                    onChange={()=>{
                        handleOnChangeOnOption(voluntary)
                    }} />
                </div>
            </div>
        </div>
    )
}

export default VoluntaryOption