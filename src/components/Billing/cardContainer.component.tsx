import Card from "./setupcard.component";
import './cardContainer.component.scss';
import { User } from "../../models/User";
const CardContainer = ({userData,setUserData}:{userData:User|null,setUserData:any}) => {
      return (
        <div className="card-container">
            <Card setUserData={null} title="Adatszolgáltatás" content="" userData={userData}/>
            <Card setUserData={setUserData} title="Cím" content={``} userData={userData}/>
            <Card setUserData={null} title="Előfizetés" content={``} userData={userData}/>
        </div>
      )
        
}
export default CardContainer