import * as React from 'react'

export default function Clock() {
    const [time, setTime] = React.useState(0)

    React.useEffect(() => {
        let interval = setInterval(() => {
            setTime((t) => {
                return t + 1
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section>
            <h1>Current Time</h1>
            <p>{time.toLocaleTimeString()}</p>
        </section>
    )
}
