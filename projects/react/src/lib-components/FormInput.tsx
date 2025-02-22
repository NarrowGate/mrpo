import React from 'react'

interface TptInputProps {
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const TptInput: React.FC<TptInputProps> = ({ onChangeHandler }) => {
    return (
        <div>
            <input type='text' placeholder='Ussssername' onChange={onChangeHandler} />
        </div>
    )
}
export default TptInput
