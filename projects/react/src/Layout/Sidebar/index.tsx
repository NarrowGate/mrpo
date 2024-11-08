const index = () => {
    let menuItems = ['Home', 'About', 'Contact', 'Services', 'Portfolio', 'Blog', 'Pages', 'Shop']
    return (
        <div className='sidebar'>
            <ul>
                {menuItems.map((item, index) => {
                    return <li key={index}> {item}</li>
                })}
            </ul>
        </div>
    )
}

export default index
