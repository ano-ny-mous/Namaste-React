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

root.render(<AppLayout />);
