import * as React from 'react'

function TextInput() {
    const ref = React.useRef(null)
    React.useEffect(() => {
        ref.current.focus()
    }, [])
    return (
        <div>
            <h1>Autofocus Input</h1>
            <label htmlFor='focus'>Email Address</label>
            <input id='focus' ref={ref} type='email' placeholder='Enter your email' />
        </div>
    )
}

export default TextInput
