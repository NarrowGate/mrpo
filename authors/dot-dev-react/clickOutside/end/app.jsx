import * as React from 'react'
import { closeIcon } from './icons'

export default function ClickOutside() {
    const [isOpen, setModal] = React.useState(false)
    const dialogRef = React.useRef(null)

    const handleOpenModal = () => {
        setModal(true)
    }

    const handleCloseModal = () => {
        setModal(false)
    }

    React.useEffect(() => {
        if (isOpen === true) {
            const handleClickOutside = (event) => {
                if (dialogRef.current && !dialogRef.current.contains(event.target)) {
                    setModal(false)
                }
            }
            document.addEventListener('pointerdown', handleClickOutside)
            return () => document.removeEventListener('pointerdown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <>
            <section>
                <h1>Click Outside</h1>
                <button className='link' onClick={handleOpenModal}>
                    Open Modal
                </button>
            </section>
            {isOpen && (
                <dialog ref={dialogRef}>
                    <button onClick={handleCloseModal}>{closeIcon}</button>

                    <h2>Modal</h2>
                    <p>Click outside the modal to close (or use the button) whatever you prefer.</p>
                </dialog>
            )}
        </>
    )
}
