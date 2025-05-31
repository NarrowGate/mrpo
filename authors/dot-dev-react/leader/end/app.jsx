import * as React from 'react'

export default function FollowTheLeader() {
    const [position, setPosition] = React.useState([0, 0])
    const boxRef = React.useRef(null)

    const handleClick = ({ clientX, clientY }) => {
        let { width, height } = boxRef.current.getBoundingClientRect()
        setPosition([clientX - width / 2, clientY - height / 2])
    }

    return (
        <div className='wrapper' onClick={handleClick}>
            <div
                className='box'
                ref={boxRef}
                style={{
                    transform: `translate(${position[0]}px, ${position[1]}px)`,
                    transition: 'transform 1s'
                }}
            />
        </div>
    )
}
