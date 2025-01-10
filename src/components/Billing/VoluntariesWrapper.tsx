import { useNavigate } from 'react-router-dom';
import { settings } from '../../settings.ts'
import './VoluntariesWrapper.scss'
import VoluntaryOption from './VoluntaryOption'
import { getVoluntaryById } from '../../functions.ts';
import { useState } from 'react';

const VoluntariesWrapper = () => {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(0);

    const handleClickOnVoluntryOption = (id: number) => {
        setSelectedOption(id);
        console.log(getVoluntaryById(id));

    }
    const handleClickToBilling = () => {
        navigate("/billing");
    }
    const voluntaries = settings.VOLUNTARIES.map((voluntary: any) => {
        return <VoluntaryOption
            voluntary={voluntary}
            key={voluntary.id}
            selectedOption={selectedOption}
            handleClickOnVoluntryOption={handleClickOnVoluntryOption} />
    });
    return (
        <>
            <div className="voluntaries-wrapper">
                <div className="back-button-wrapper">
                    <button className="base-btn" onClick={handleClickToBilling}>Vissza a számlázásra</button>
                </div>
                {voluntaries}
            </div>
        </>
    )
}

export default VoluntariesWrapper   