// In this challenge you're tasked with completing an app that collects new notes from the user and displays them in a list. Whenever a new note is added, you'll need to scroll it into view.

// Tasks
// Add a new note when the user submits the form
// Scroll the new note into view
// Clear the input field when the user submits a valid note
// Prevent empty notes from being added

import * as React from 'react'

export default function FieldNotes() {
    const [notes, setNotes] = React.useState([
        'Components encapsulate both the visual representation of a particular piece of UI as well as the state and logic that goes along with it.',
        'The same intuition you have about creating and composing together functions can directly apply to creating and composing components. However, instead of composing functions together to get some value, you can compose components together to get some UI.',
        'JSX combines the power and expressiveness of JavaScript with the readability and accessibility of HTML',
        'Just like a component enabled the composition and reusability of UI, hooks enabled the composition and reusability of non-visual logic.'
    ])

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const newNote = formData.get('note')
    }

    return (
        <article>
            <h1>Field Notes</h1>
            <div>
                <ul>
                    {notes.map((msg, index) => (
                        <li key={index}>{msg}</li>
                    ))}
                </ul>
                <form onSubmit={handleSubmit}>
                    <input required type='text' x name='note' placeholder='Type your note...' />
                    <button className='link' type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        </article>
    )
}
