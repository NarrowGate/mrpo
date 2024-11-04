import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Layout/Header'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <div className='content'>
                <div className='sidebar'>Sidebar</div>
                <div className='mainContent'>Main Content</div>
                <div className='footer'>Footer</div>
            </div>
        </>
    )
}

export default App
