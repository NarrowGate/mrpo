import { makeRequest, openDrawsEndpoint } from './js/network.js'

const Company = ({ status, company, setStatus, callback }) => {
    const requestOpenDraws = async (companyId) => {
        try {
            setStatus('loading')

            const params = {
                CompanyId: companyId,
                MaxDrawCount: 2
            }

            const data = await makeRequest(openDrawsEndpoint, 'POST', params)
            callback(data)
        } catch (e) {
            setStatus('network-error')
            console.error(e)
        }
    }

    const companyClickHandler = () => {
        if (status != 'loading') {
            requestOpenDraws(company.id)
        }
    }

    return (
        <div className={`company ${status === 'loading' ? 'loading' : ''}`}>
            <a href='#' onClick={companyClickHandler} role='button'>
                <h3>{company.displayName}</h3>
            </a>
        </div>
    )
}
export default Company
