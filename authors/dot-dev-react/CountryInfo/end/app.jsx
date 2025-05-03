import * as React from 'react'

// Checkout solution for ignore case
export default function CountryInfo() {
    const [countryCode, setCountryCode] = React.useState('AU')
    const [data, setData] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    const handleChange = async (e) => {
        setCountryCode(e.target.value)
    }

    const fetchData = async () => {
        const url = `https://restcountries.com/v2/alpha/${countryCode}`
        setIsLoading(true)
        try {
            let response = await fetch(url)
            let data = await response.json()
            let theData = {
                name: data.name,
                region: data.region,
                capital: data.capital,
                area: data.area,
                population: data.population
            }
            setData({ ...theData })
        } catch (error) {
            setData(null)
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }
    React.useEffect(() => {
        fetchData()
    }, [countryCode])

    return (
        <section>
            <header>
                <h1>Country Info:</h1>

                <label htmlFor='country'>Select a country:</label>
                <div>
                    <select id='country' value={countryCode} onChange={handleChange}>
                        <option value='AU'>Australia</option>
                        <option value='CA'>Canada</option>
                        <option value='CN'>China</option>
                        <option value='FR'>France</option>
                        <option value='DE'>Germany</option>
                        <option value='IN'>India</option>
                        <option value='JP'>Japan</option>
                        <option value='MX'>Mexico</option>
                        <option value='GB'>United Kingdom</option>
                        <option value='US'>United States of America</option>
                    </select>
                    {isLoading && <span>Loading...</span>}
                    {error && <span>{error.message}</span>}
                </div>
            </header>

            {data && (
                <article>
                    <h2>{data.name}</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Capital:</td>
                                <td>{data.capital}</td>
                            </tr>
                            <tr>
                                <td>Region:</td>
                                <td>{data.region}</td>
                            </tr>
                            <tr>
                                <td>Population:</td>
                                <td>{data.population}</td>
                            </tr>
                            <tr>
                                <td>Area:</td>
                                <td>{data.area}</td>
                            </tr>
                        </tbody>
                    </table>
                </article>
            )}
        </section>
    )
}
