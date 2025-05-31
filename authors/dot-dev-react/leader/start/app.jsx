// The concept is simple, animate the center of the box to the coordinates that the user clicks.

// To do this, you'll need to update the position array to include the new x and y positions of where the box should transform to.

// TASKS
// Animate the box to the coordinates that the user clicksimport * as React from "react";

export default function FollowTheLeader() {
    const position = [0, 0]

    const handleClick = ({ clientX, clientY }) => {}

    return (
        <div className='wrapper'>
            <div
                className='box'
                style={{
                    transform: `translate(${position[0]}px, ${position[1]}px)`,
                    transition: 'transform 1s'
                }}
            />
        </div>
    )
}
