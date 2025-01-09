import { useState, useEffect } from "react";
import { User } from "../../models/User";
import CardWrapper from "./CardWrapper";
import BilllingHeader from "./Header";
import InvoiceListTable from "./InvoiceList";
import { settings } from "../../settings";

const BillingWrapper = () => {
    document.title = "Billing"
    const [userData, setUserData] = useState<User | null>(null)
    useEffect(() => {
        fetch(`${settings.BASE_URL}/users/5`)
            .then(response => response.json())
            .then(json => setUserData(json as User))
            .catch(error => console.error(error))
    }, [])
    return (<>
        <BilllingHeader userData={userData} />
        <CardWrapper setUserData={setUserData} userData={userData}/>
        <InvoiceListTable />
    </>)
}
export default BillingWrapper