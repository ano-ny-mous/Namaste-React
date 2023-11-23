import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

//what is state
//what is hooks? - functions
//what is useState

function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  //let searchTxt = "KFC";

  //searchText is a local state variable
  const [searchInput, setSearchInput] = useState(""); //To create a state variable, returns = -variable name, function to update the variable

  // const [searchText, setSearchText] = useState("false");

  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
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

        {/* <h1>{searchText}</h1> */}

        {/* toogle true false */}
        {/* <button
          className="search-btn"
          onClick={() => {
            if (searchText == "true") {
              setSearchText("false");
            } else {
              setSearchText("true");
            }
          }}
        >
          Search - {searchInput}
        </button> */}

        <button
          className="search-btn"
          onClick={() => {
            //Need to filter data
            const data = filterData(searchInput, restaurantList);
            //Update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantList">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
