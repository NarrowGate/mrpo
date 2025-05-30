// In this challenge you'll be adding a modal experience to the app. The user needs to be able to open the modal and then close it either by clicking the close icon in the modal itself, or by clicking anywhere outside of the modal.

// You'll need both component state and a reference to the modal to make it work properly. You'll also want to reference the pointerdown event if you're not familiar with it.

// Tasks
// Don't render the modal by default
// Clicking the 'Open Modal' button should open the modal
// Don't close the modal when the dialog is clicked
// Close modal by clicking close icon
// Close the modal when the user clicks outside of the modal

import * as React from 'react'
import { closeIcon } from './icons'

export default function ClickOutside() {
    const isOpen = false

    const handleOpenModal = () => {}

    const handleCloseModal = () => {}

    return (
        <>
            <section>
                <h1>Click Outside</h1>
                <button className='link' onClick={handleOpenModal}>
                    Open Modal
                </button>
            </section>
            {isOpen && (
                <dialog>
                    <button onClick={handleCloseModal}>{closeIcon}</button>

                    <h2>Modal</h2>
                    <p>Click outside the modal to close (or use the button) whatever you prefer.</p>
                </dialog>
            )}
        </>
    )
}
