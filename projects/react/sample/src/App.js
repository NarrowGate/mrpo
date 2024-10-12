import Header from './Header/Header.js'
import Sidebar from './Sidebar/Sidebar.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'

function App() {
    return (
        <div className='main'>
            <Header />
            <h1>Mample Component</h1>
            <Sidebar />
            <Main />
            <Footer />
        </div>
    )
}

export default App
