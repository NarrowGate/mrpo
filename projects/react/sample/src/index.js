import React from 'react'
import ReactDOM from 'react-dom/client'

function SampleComponent() {
    return (
        <div>
            <h1>kkkkkample Component</h1>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<SampleComponent />)
