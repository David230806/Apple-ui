
import "./Item.css"

const Item = ({item}) => {
    return(
        <div className="Item">
            <div className="text">
                <h3>{item.title}</h3>
                <b>{item.discription}</b>
            </div>
            <div className="links-item">
                <a href="#">{item.learnmore}</a>
                <a href="#">{item.buy}</a> 
            </div>
            <img src={item.img} alt="" />
        </div>
    )
}

export default Item