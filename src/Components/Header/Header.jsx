import apple from "../../imges/apple.svg"
import './Header.css'
const Header = () => {
    
    return(
        <header className="header">
            <div className="links">
                <div className="header-item" to="/">
                    <img src={apple} alt="" href="/" />
                </div>
                <div className="header-item" to="/store">
                    <a href="/store">Store</a>
                </div>
                <div className="header-item" to="/mac">
                    <a href="/mac">iMac</a>
                </div>
            </div>
        </header>
    )
}

export default Header