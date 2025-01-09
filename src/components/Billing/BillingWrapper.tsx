import { useState, useEffect } from "react";
import { User } from "../../models/User";
import CardContainer from "./CardContainer";
import BilllingHeader from "./Header";
import InvoiceListTable from "./InvoiceList";

const BillingWrapper = () => {
    document.title = "Billing"
    const [userData, setUserData] = useState<User | null>(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/5')
            .then(response => response.json())
            .then(json => setUserData(json as User))
            .catch(error => console.error(error))
    }, [])
    return (<>
        <BilllingHeader userData={userData} />
        <CardContainer setUserData={setUserData} userData={userData}/>
        <InvoiceListTable />
    </>)
}
export default BillingWrapper