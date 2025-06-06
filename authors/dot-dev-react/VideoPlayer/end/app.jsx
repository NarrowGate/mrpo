import * as React from 'react'

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const videoRef = React.useRef(null)

    // Interesting alternative in Solution
    if (videoRef.current) {
        if (isPlaying) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }

    const handleTogglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <section className='container'>
            <h1>Video Player</h1>
            <article>
                <video
                    ref={videoRef}
                    poster='https://image.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/thumbnail.webp'
                >
                    <source
                        src='https://stream.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/high.mp4'
                        type='video/mp4'
                    />
                </video>
                <div>
                    <button title={isPlaying ? 'Pause' : 'Play'} onClick={handleTogglePlay}>
                        {isPlaying ? '⏸' : '▶'}
                    </button>
                </div>
            </article>
        </section>
    )
}
