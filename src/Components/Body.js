import RestaurantCard from "./RestaurantCard"
import { useState } from "react"
import resList from "../utils/mockData"


const Body = () => {

  // useState is state variable that has powerful variables
  let [resLists, setResLists] = useState(resList)


 


    return (
        <div className="body">
            <div className="filer">
                <button className="filter-btn" onClick={() => {
                   filteredList = resLists.filter(
                    (result) => result.data.totalRatings < 200
                   )
                setResLists(filteredList)
                }}> Top rated restaurants</button>
            </div>
            <div className="res-container">
                {
                    resLists.map((restaurant) => {
                        return ( <RestaurantCard key= {restaurant.data.id} resData = {restaurant}/>)
                       
                    })
                }
            </div>
        </div>
    )
}

export default Body;