// You're given an authContext with the expected shape of the user's auth state – isAuthenticated: boolean, login: function, logout: function.

// Your challenge is to finish the AuthProvider component – making isAuthenticated, login, and logout available anywhere in the component tree – and then to use those values in any component that needs them.

// Tasks
// Render a login form when the user is not authenticated
// Display the Dashboard component after the user logs in
// Display the login screen if the user logs out

import * as React from 'react'
import Dashboard from './Dashboard'

const authContext = React.createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {}
})

const AuthProvider = ({ children }) => {
    const isAuthenticated = false

    const login = () => {}

    const logout = () => {}

    return <authContext.Provider>{children}</authContext.Provider>
}

function NavBar() {
    const logout = () => {}
    const isAuthenticated = false

    return (
        <nav>
            <span role='img' aria-label='Money bags emoji'>
                💰
            </span>
            {isAuthenticated && (
                <button className='link' onClick={logout}>
                    Logout
                </button>
            )}
        </nav>
    )
}

function LoginForm() {
    const login = () => {}

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const username = formData.get('username')
        const password = formData.get('password')
        login(username, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <div>
                <label htmlFor='username'>Username:</label>
                <input required type='text' id='username' name='username' placeholder='Enter your username' />
            </div>
            <div>
                <label htmlFor='password'>Password:</label>
                <input required id='password' type='password' name='password' placeholder='Enter your password' />
            </div>
            <button className='primary' type='submit'>
                Login
            </button>
        </form>
    )
}

function Main() {
    const isAuthenticated = false

    return <main>{isAuthenticated ? <Dashboard /> : <LoginForm />}</main>
}

export default function App() {
    return (
        <AuthProvider>
            <NavBar />
            <Main />
        </AuthProvider>
    )
}
