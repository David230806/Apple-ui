import Item from "../Item/Item.jsx";
import data from "../../store.json"
import "./List.css"
const List = () => {
    
    return(
        data.map(item => {
            return(
                <div className="item">
                    <Item item={item} key={item._id}/>
                </div>
            )
        })
    )
}

export default List