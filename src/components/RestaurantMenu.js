import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";


const RestaurantMenu = () =>{

    const [resInfo, setresInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);
    
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log(json);
        setresInfo(json?.data);
    };

    if(resInfo === null)
    {
        return <Shimmer />;
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const itemsCards = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards; //549334

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemsCards.map((item) => (
                   <li key={item?.card?.info?.id}>
                     {item?.card?.info?.name} - Rs {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}
                   </li>
                ))}       
            </ul>
                
        </div>
    );
};

export default RestaurantMenu;