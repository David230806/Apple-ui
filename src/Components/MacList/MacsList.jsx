import data from "../../store.json"
import { useState } from "react"
import MacListItem from "../MacListItem/MacListItem.jsx"

const MacsList = () => {
    const [filter, setFilter] = useState(true)

    return(
        <div className="Notebooks">
            {data.map(item => {
                console.log(item.NoteBooks)
                return(
                    <div className="filterItem">
                        {item.NoteBooks.map((item2) => {
                            <h1>{item2.battery}</h1>
                        })}
                    </div>
                )
            })} 
        </div>
    )
}

export default MacsList