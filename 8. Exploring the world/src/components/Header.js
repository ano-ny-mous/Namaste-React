import { useState } from "react";

const loggedInUser = () => {
  // API call to check authentication
  if(loggedIn==true)
  {
    setLoggedIn(false);
    return false;
  }
  else
  {
    setLoggedIn(true);
    return true;
  }

}

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const Header = () => {
  // console.log("render");
  //const title="Food Villa"
  // const [titleText,setTitleText]=useState("Food Villa");

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <div className="header">
      <Title />

      {/* change title on button click */}
      {/* <h1>{titleText}</h1>
      <button onClick={()=> {
        setTitleText("Villa Food");
      }}>change</button> */}

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {
        // only JS expressions not statements
        // ((a=10),(console.log(a)))

         (isLoggedIn)? <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button> : <button onClick={()=>{setIsLoggedIn(true)}}>Login</button>
      }
    </div>
  );
};

export default Header;
