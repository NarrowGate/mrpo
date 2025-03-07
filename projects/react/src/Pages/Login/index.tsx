import TptInput from '../../lib-components/form/Input'
import React, { useState } from 'react'

const index = () => {
    const [username, setUsername] = useState('melvin')

    const updateUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    return (
        <div className='login w-80 bg-purple-100  rounded-2xl p-4'>
            <h2 className='text-xl font-semi-bold mb-2'>Login page</h2>
            <form className='py-4 px-4'>
                <TptInput onChangeHandler={updateUsername} type='text' placeholder='Username' />
                <TptInput onChangeHandler={updateUsername} type='password' placeholder='Password' />
                <button className='border-1 px-4 py-2 text-white bg-indigo-400 border-indigo-300 rounded-sm'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default index
