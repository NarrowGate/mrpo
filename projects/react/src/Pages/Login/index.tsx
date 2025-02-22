import TptInput from '../../lib-components/FormInput'
import React, { useState } from 'react'

const index = () => {
    const [username, setUsername] = useState('melvin')

    const updateUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    return (
        <div className='login'>
            <h2>Login page</h2>
            <form>
                <TptInput onChangeHandler={updateUsername} />
                Username: {username}
                <input type='password' placeholder='Password' />
                <button>Login</button>
            </form>
        </div>
    )
}

export default index
