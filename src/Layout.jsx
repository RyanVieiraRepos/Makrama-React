import { Outlet } from 'react-router-dom'


import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

function Layout() {
    return (
        <>
            <section>
                <Header />
                <Outlet />
                <Footer />
            </section>

        </>
    )
}

export default Layout