import SetupCard from "./Setupcard";
import './CardContainer.scss';
import { User } from "../../models/User";

export type CardContainerProps ={userData:User|null,setUserData:any }
const CardContainer = ({userData,setUserData}:CardContainerProps) => {
      return (
        <div className="card-container">
            <SetupCard setUserData={null} title="Adatszolgáltatás" content="" userData={userData}/>
            <SetupCard setUserData={setUserData} title="Cím" content={``} userData={userData}/>
            <SetupCard setUserData={null} title="Előfizetés" content={``} userData={userData}/>
        </div>
      )
        
}
export default CardContainer