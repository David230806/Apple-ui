import Header from "../../Components/Header/Header.jsx"
import iMacs from "../../imges/iMacs.jpg"
import MacsList from "../../Components/MacList/MacsList.jsx"
import "./Mac.css"

const Mac = () => {
    return(
        <div className="Macpage">
            <Header />
            <main>
                <div className="first-screen">
                    <div className="text-mac">
                        <span className="new">New</span>
                        <h1>iMac</h1>
                        <b>Say hello.</b>
                        <span>From $1299</span>
                        <button className="buy">Buy</button>
                        <a href="#">Learn more</a>
                    </div>
                    <div className="img">
                        <img src={iMacs} alt="" />
                    </div>
                </div>
                <div className="maclist">
                    <h1>Which Mac is right for you?</h1>
                    <a href="#">Compare all Mac models</a>
                    <div className="filter">
                        <div className="buttons">
                            <button className="Notebook">Notebook</button>
                            <button className="Desktop">Desktop</button>
                            <hr />
                        </div>
                        <MacsList />
                    </div>
                </div>
            </main>
        </div>
    )    
}

export default Mac