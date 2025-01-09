import { useEffect, useState } from "react"
import Paginator from "./Paginator"
import './InvoiceList.scss'
import { Invoice } from "../../models/Invoice"
import { settings } from "../../settings"

const InvoiceListTable = () => {
    const [invoices, setInvoices] = useState<Invoice[]>([])
    const [invoiceListPageNumber, setInvoiceListPageNumber] = useState(1)
    const [allInvoicesRows, setAllInvoicesPages] = useState(0)
    const [selectedInvoices, setSelectedInvoices] = useState(0)
    const showInvoicePerPage: number = 7
    const setPageNum=(num: React.MouseEvent<HTMLElement>) => {
        const page = (num.target as HTMLElement).dataset.page;
        setInvoiceListPageNumber(Number(page)) 
    }
    const getAllRowFromDb=()=> {
        fetch(`${settings.BASE_URL}/todos`)
            .then(response => response.json())
            .then(json => {
                setAllInvoicesPages(json.length);
            })
    }
    const getInvoicesFromDb=()=> {
        fetch(`${settings.BASE_URL}/todos?_page=${invoiceListPageNumber}&_limit=${showInvoicePerPage}`)
            .then(response => response.json())
            .then(json => {
                getAllRowFromDb()
                setSelectedInvoices(0)
                json.map((invoice: Invoice) => {
                    invoice.selected = false
                })
                setInvoices(json);
            })
    }
    useEffect(() => {
        getInvoicesFromDb()
    }, [invoiceListPageNumber])

    const handleDownloadSinge = () => {
        window.open(settings.DUMMY_PDF_URL);
    }
    const handleSelectSingle = (invoice: Invoice) => {
        invoice.selected = !invoice.selected
        setInvoices([...invoices])
    }

    const getAllPagesNumber = (allInvoicesRows: number, showInvoicePerPage: number) => {
        return ((Math.round(allInvoicesRows / showInvoicePerPage) > 20)) ? 20 : Math.round(allInvoicesRows / showInvoicePerPage)
    }

    const handleCheckboxChange = () => {
        const allSelected = invoices.filter((invoice: Invoice) => invoice.selected)
        setSelectedInvoices(allSelected.length)
    }
    const handleCheckboxChangeAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkedAll = e.target.checked
        const allSelected = invoices.map((invoice: Invoice) => { (checkedAll) ? invoice.selected = true : invoice.selected = false; return invoice })
        setInvoices(allSelected)
        setSelectedInvoices((invoices.filter((invoice: Invoice) => invoice.selected)).length)

    }
    const handleDownloadAllSeleccted = () => {
        const ids = invoices
            .filter((invoice) => invoice.selected)
            .map((invoice) => invoice.id);
        //   console.log(ids);

        if (selectedInvoices > 0) {
            window.open(settings.DUMMY_ZIP_URL);
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
                {invoices.map((invoice: Invoice) => {
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