import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {name,cuisines, cloudinaryImageId, totalRatings } = resData
    return (
        <div className="res-card">
            <img  className = "res-logo" src = {CDN_URL + cloudinaryImageId }></img>
            <h3> {name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{totalRatings}</h4>
            
        </div>
    )

}

export default RestaurantCard;