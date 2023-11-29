import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//what is state
//what is hooks? - functions
//what is useState

function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {

  const [searchInput, setSearchInput] = useState("");

  // const [restaurants, setRestaurants] = useState(restaurantList);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  // console.log(restaurants);
  
  // empty dependency array => once after render
  // dep arrary [searchInput] => once after initial render + everytime after rerender (my search inputInput changes) 
  useEffect(() => {
    //console.log("use effect");
    //API Call
    getRestaurants();
  },[]);

  // useEffect(()=>{
  //   if(filteredRestaurants.length===0) return(<h1>No Restaurants Match your Filter</h1>);
  // },[filteredRestaurants])


  async function getRestaurants()
  {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.935192&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING");
    json = await data.json();
    console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    //optional chaining
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  

  console.log("render");

  //not render component (early return)
  if(!allRestaurants) return null;
  

  
  return (allRestaurants.length===0)? <Shimmer/> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            //Need to filter data
            const data = filterData(searchInput, allRestaurants);
            //Update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantList">
        {
          
          // if(filteredRestaurants.length===0&&allRestaurants.length!=0) return(<h1>No Restaurants Match your Filter</h1>);
        filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}      
        
      </div>
    </>
  );
};

export default Body;
