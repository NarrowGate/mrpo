import * as React from 'react'
export default function ExpandingTextarea() {
    const [text, setText] = React.useState('')
    const ref = React.useRef(null)

    const handleChange = (event) => {
        setText(event.target.value)
        const textarea = ref.current
        textarea.style.height = 'auto'
        const scrollHeight = textarea.scrollHeight
        textarea.style.height = `${scrollHeight}px`
    }

    return (
        <section className='container'>
            <h1>Expanding Textarea</h1>
            <label htmlFor='textarea'>Enter or paste in some text</label>
            <textarea ref={ref} placeholder='Enter some text' value={text} onChange={handleChange} rows={1} />
        </section>
    )
}
