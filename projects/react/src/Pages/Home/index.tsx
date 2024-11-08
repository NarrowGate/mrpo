import Header from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar'
import Footer from '../../Layout/Footer'

const index = () => {
    return (
        <>
            <Header />
            <div className='content'>
                <Sidebar />
                <div className='mainContent'>Main Content</div>
            </div>
            <Footer />
        </>
    )
}

export default index
