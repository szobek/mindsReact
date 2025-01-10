import SetupCard from "./Setupcard";
import './CardWrapper.scss';
import { User } from "../../models/User";

export type CardContainerProps = { userData: User | null, setUserData: any }
const CardWrapper = ({ userData, setUserData }: CardContainerProps) => {
  return (
    <div className="card-container">
      <SetupCard setUserData={null} title="Adatszolgáltatás" content="" userData={userData} id={1} />
      <SetupCard setUserData={setUserData} title="Cím" content={``} userData={userData} id={2}/>
      <SetupCard setUserData={null} title="Előfizetés" content={``} userData={userData} id={3} />
    </div>
  )
}
export default CardWrapper