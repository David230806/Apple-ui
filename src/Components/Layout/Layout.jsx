import Footer from "../Footer/Footer.jsx"
import Header from "../Header/Header.jsx"

const Layout = ({children}) => {
    return(
        <div className="Layout">
            <Header />
            <div className="main">
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout