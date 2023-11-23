import React from "react";
import ReactDOM from "react-dom/client";
//Default Import
import Header from "./components/Header";
//Named Import
// import { Title ,Header} from "./components/Header";

// import Header, { Title } from "./components/Header";

// import * as XYZ from "./components/Header";
// XYZ.Header

import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 * Header
 *  - Logo
 *  - Nav Items(Right Side)
 *  - Cart
 * Body
 *  - Search Bar
 *  - RestaurantList
 *     - RestaurantCard
 *     - Image
 *     - Name
 *     - Rating
 *     - Cusines
 * Footer
 *  - Links
 *  - Copyright
 */

const burgerKing = {
  name: "Burger King",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qnfkbrlvqqyfvygbfihj",
  cusines: ["Burger", "American"],
  rating: "4.2",
};

// const RestaurantCard = (props) => {
//   console.log(props);
//   return (
//     <div className="card">
//       <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
//       props.restaurant.info.cloudinaryImageId} />
//       <h2>{props.restaurant.info?.name}</h2>  {/*optioal chaining*/}
//       <h3>{props.restaurant.info?.cuisines.join(",")}</h3>
//       <h4>{props.restaurant.info?.avgRating} stars</h4>
//     </div>
//   )
// }

// const RestaurantCard = ( {restaurant} ) => {
//   const {cloudinaryImageId, name, cuisines, avgRating } = restaurant.info;
//   return (
//     <div className="card">
//       <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
//       cloudinaryImageId} />
//       <h2>{name}</h2>
//       <h3>{cuisines.join(",")}</h3>
//       <h4>{avgRating} stars</h4>
//     </div>
//   )
// }

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeaderComponent />);

//can have only 1 parent
// const jsx = (<React.Fragment>
//   <h1>namastha</h1>
//   <h2>javascript</h2>
// </React.Fragment>)

// const jsx = (<>
//   <h1>namastha</h1>
//   <h2>javascript</h2>
// </>)

//inline style in react
// const styleObj={
//   backgroundColor:"red",
// }

// const jsx = (
// <div style={styleObj}>
//   <h1>namastha</h1>
//   <h2>javascript</h2>
// </div>)

// root.render(jsx);

root.render(<AppLayout />);
