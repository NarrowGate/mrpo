import * as React from 'react'

export default function Clock() {
    const [time, setTime] = React.useState(null)

    React.useEffect(() => {
        let intervalId = setInterval(() => {
            let now = new Date()
            setTime(now)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    if (time === null) return null // Avoid rendering until time is set

    return (
        <section>
            <h1>Current Time</h1>
            <p>{time.toLocaleTimeString()}</p>
        </section>
    )
}
