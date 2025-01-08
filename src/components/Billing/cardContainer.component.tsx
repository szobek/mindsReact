import Card from "./setupcard.component";
import './cardContainer.component.scss';
import { User } from "../../models/User";

export type CardContainerProps ={userData:User|null,setUserData:any }
const CardContainer = ({userData,setUserData}:CardContainerProps) => {
      return (
        <div className="card-container">
            <Card setUserData={null} title="Adatszolgáltatás" content="" userData={userData}/>
            <Card setUserData={setUserData} title="Cím" content={``} userData={userData}/>
            <Card setUserData={null} title="Előfizetés" content={``} userData={userData}/>
        </div>
      )
        
}
export default CardContainer