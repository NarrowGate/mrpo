import React from 'react'

interface TptInputProps {
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    type: string
    placeholder: string
}
const TptInput: React.FC<TptInputProps> = ({ onChangeHandler, ...rest }) => {
    return (
        <div className='w-auto mb-4'>
            <input
                className='block w-full border-1 rounded-sm border-indigo-300 p-2'
                onChange={onChangeHandler}
                {...rest}
            />
        </div>
    )
}
export default TptInput
