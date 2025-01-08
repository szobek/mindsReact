import { useEffect, useState } from "react"
import Paginator from "./Paginator"
import './InvoiceList.scss'

const InvoiceListTable = () => {
    const [invoices, setInvoices] = useState<any[]>([])
    const [invoiceListPageNumber, setinvoiceListPageNumber] = useState(1)
    const [allInvoicesRows, setAllInvoicesPages] = useState(0)
    const [selectedInvoices, setSelectedInvoices] = useState(0)


    const showInvoicePerPage: number = 7

    function setPageNum(num: any) {
        setinvoiceListPageNumber(num.target.dataset.page);
    }
    function getAllRowFromDb() {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(response => response.json())
            .then(json => {
                setAllInvoicesPages(json.length);
            })

    }
    function getInvoicesFromDb() {
        fetch(`https://jsonplaceholder.typicode.com/todos?_page=${invoiceListPageNumber}&_limit=${showInvoicePerPage}`)
            .then(response => response.json())
            .then(json => {
                getAllRowFromDb()
                setSelectedInvoices(0)
                json.map((invoice: any) => {
                    invoice.selected = false
                })
                setInvoices(json);
            })
    }
    useEffect(() => {
        getInvoicesFromDb()
    }, [invoiceListPageNumber])

    const handleDownloadSinge = () => {
        window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf');
    }
    const handleSelectSingle = (invoice: any) => {
        invoice.selected = !invoice.selected
        setInvoices([...invoices])
    }

    const getAllPagesNumber = (allInvoicesRows: number, showInvoicePerPage: number) => {
        return ((Math.round(allInvoicesRows / showInvoicePerPage) > 20)) ? 20 : Math.round(allInvoicesRows / showInvoicePerPage)
    }

    const handleCheckboxChange = () => {
        const allSelected = invoices.filter((invoice: any) => invoice.selected)
        setSelectedInvoices(allSelected.length)
    }
    const handleCheckboxChangeAll = (e: any) => {
        const checkedAll = e.target.checked
        const allSelected = invoices.map((invoice: any) => { (checkedAll) ? invoice.selected = true : invoice.selected = false; return invoice })
        setInvoices(allSelected)
        setSelectedInvoices((invoices.filter((invoice: any) => invoice.selected)).length)

    }
    const handleDownloadAllSeleccted = () => {
        const ids = invoices
            .filter((invoice) => invoice.selected)
            .map((invoice) => invoice.id);
        //   console.log(ids);

        if (selectedInvoices > 0) {
            window.open('https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip');
        }
    }

    return (<div className="invoices-table-container">
        <p className="text-end"> <button disabled={selectedInvoices === 0} className="base-btn" onClick={handleDownloadAllSeleccted}>Kijelöltek letöltése ({selectedInvoices})</button></p>
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th>
                        <input onChange={handleCheckboxChangeAll} type="checkbox" checked={selectedInvoices === showInvoicePerPage} />

                    </th>
                    <th>Neve</th>
                    <th>Id </th>
                    <th>Fizetve</th>
                    <th>Felhasználó</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {invoices.map((invoice: any) => {
                    return <tr key={invoice.id}>
                        <td >
                            <input onClick={() => {
                                handleSelectSingle(invoice)
                            }} onChange={handleCheckboxChange} type="checkbox" checked={invoice.selected} />
                        </td>
                        <td>{invoice.title}</td>
                        <td>{invoice.id}</td>
                        <td>{(invoice.completed) ? "Fizetve" : "Nincs fizetve"}</td>
                        <td>{invoice.userId}</td>
                        <td className="billing-dl-text" onClick={handleDownloadSinge}> Letöltés </td>
                    </tr>
                })}
            </tbody>
        </table>
        <Paginator allInvoicesPages={getAllPagesNumber(allInvoicesRows, showInvoicePerPage)} actualPage={invoiceListPageNumber} modifyPage={setPageNum} />
    </div>
    )
}

export default InvoiceListTable