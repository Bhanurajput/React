import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla} = resData?.info; // destructuring the object
  
    return (
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>      
        <img className="res-logo"
          alt=""
          src={CDN_URL + cloudinaryImageId }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Star</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    )
  }
  
export default RestaurantCard;