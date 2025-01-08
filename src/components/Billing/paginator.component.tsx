import './paginator.component.scss'

const Paginator = ({ actualPage, modifyPage, allInvoicesPages }: { actualPage: number, modifyPage: any, allInvoicesPages: number }) => {
    let paginatorArray: any[] = []
    for (let i = 0; i < allInvoicesPages; i++)paginatorArray.push(i + 1)
    function setActualPage(dir: string, e: any) {
        let page = 0
        if (dir === "-") page = (Number(actualPage) - 1 === 0) ? 1 : Number(actualPage) - 1
        if (dir === "+") page = (Number(actualPage) + 1 > allInvoicesPages) ? allInvoicesPages : Number(actualPage) + 1
        e.target.dataset.page = page
        modifyPage(e)
    }
    return (<div className='invoicesPaginatorContainer'>
        <button disabled={Number(actualPage) === 1 ? true : false} onClick={(event) => { setActualPage("-", event) }}>prev</button>
        {paginatorArray.map((elem,index) => {
            return <span  key={index}>
                <button  className={elem == actualPage ? 'page colorized' : 'page'}  onClick={modifyPage} data-page={elem}>{elem}</button>
            </span>
        }
        )
        }
        <button disabled={Number(actualPage) === allInvoicesPages ? true : false} onClick={(event) => { setActualPage("+", event) }}>next</button>
    </div>
    )
}

export default Paginator