import resList from "../utils/mockData"
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer" 
import { Link } from "react-router-dom";

const Body = () =>{

    //local state variable (listOfRestaurants)- super powerful variable
    //setlistOfRestaurants is a function to modify listOfRestaurants, provide by useState
    const [listOfRestaurants, setlistOfRestaurants] = useState([]); // passed resList as default data    
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("");

    useEffect(()=>{
      fetchData()
    },[]);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5986083&lng=77.3692514&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json)
      // rereder the body component/ rerender the restaurants
      setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //conditional rendering
    if(listOfRestaurants.length === 0){
      return <Shimmer />;
    }
    
    return (
      <div className="body">
        <div className="filter">
            <div className="search">
              <input type="text" value={searchText} 
              onChange={(e)=>{
                setsearchText(e.target.value);
                }}/>
              <button onClick={()=>{
                //filter the  restaurant card and update the UI
                //need searchText
                
                let filteredRes = listOfRestaurants.filter((res)=>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setfilteredRestaurants(filteredRes);
              }}>Search</button>
            </div>

            <button className="filter-btn"
                onClick={() => {                  
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setlistOfRestaurants(filteredList);
                }}
            >
               Top Rated Restaurants 
            </button>
        </div>
        <div className="res-container">
        {
          filteredRestaurants.map((restaurant) =>(
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData = {restaurant} /></Link>

          ))
        }
        </div>
      </div>
    )
  }


export default Body;