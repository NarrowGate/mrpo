import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'

const handleOnLoginSuccess = (user) => {
    console.log("Logged in successfully")
}

function App() {
    const [user, setUser] = useState(null)

    return <div className='md:container md:mx-auto'>{user === null ? <Login onSuccess={handleOnLoginSuccess}/> : <Home />}</div>
}

export default App
