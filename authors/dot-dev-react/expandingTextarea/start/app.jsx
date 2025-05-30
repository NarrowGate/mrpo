// In this challenge you'll need to add functionality to the app so that the user can type into the textarea and it will expand to fit the content as they type.

// Tasks
// Update the value for the textarea when typing
// Set the textarea's height based on its scroll heightimport * as React from 'react'

export default function ExpandingTextarea() {
    const text = ''

    return (
        <section className='container'>
            <h1>Expanding Textarea</h1>
            <label htmlFor='textarea'>Enter or paste in some text</label>
            <textarea id='textarea' placeholder='Enter some text' value={text} onChange={() => {}} rows={1} />
        </section>
    )
}
