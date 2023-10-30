import React from "react";
// import { createElement as ce } from "react";
import ReactDOM from "react-dom/client";

//console.log(heading1);

// react create element =. object => html(DOM)

/**<div class="header">
 *  <h1>Namaste React</h1>
 *   <ul>
 *    <li>About Us</li>
 *    <li>Support</li>
 *    <li>Home</li>
 *   </ul>
 * </div>
 *
 */

// const heading2 = React.createElement(
//   "h2",
//   {
//     key: "h2",
//   },
//   "Heading 2"
// );

// const container = React.createElement("div", { id: "container" }, [
//   React.createElement(
//     "h1",
//     {
//       id: "title:",
//       key: "h1",
//     },
//     "Heading 1 for parcel"
//   ),
//   React.createElement("ul", {}, [
//     React.createElement("li", {}, "About Us"),
//     React.createElement("li", {}, "Support"),
//     React.createElement("li", {}, "Home"),
//   ]),
//   heading2,
// ]);

// const heading2 = createElement(
//     "h2",
//     {
//       key: "h2",
//     },
//     "Heading 2"
//   );

//   const container = createElement("div", { id: "container" }, [
//     createElement(
//       "h1",
//       {
//         id: "title:",
//         key: "h1",
//       },
//       "Heading 1 for parcel"
//     ),
//     createElement("ul", {}, [
//       createElement("li", {}, "About Us"),
//       createElement("li", {}, "Support"),
//       createElement("li", {}, "Home"),
//     ]),
//     heading2,
//   ]);

// const heading2 = ce(
//   "h2",
//   {
//     key: "h2",
//   },
//   "Heading 2"
// );

//JSX =>(bable) React.creatElement => object => HTML(DOM)
const Title = () => (<h1>Namaste React</h1>);

// React Components
// - Funtional
//   - Name of fun component starts with capital letter(not mandatory)
var xyz=10;
const HeaderComponent = () => {
  return (
    <div>
      {/* <Title /> */}
      {Title()}
      {console.log(xyz)}
      <h2>Namaste React Funtional Component</h2>
      <h2> This is a h2 tag</h2>
    </div>
  );
};

//   const container = ce("div", { id: "container" }, [
//     ce(
//       "h1",
//       {
//         id: "title:",
//         key: "h1",
//       },
//       "Heading 1 for parcel"
//     ),
//     ce("ul", {}, [
//         ce("li", {}, "About Us"),
//         ce("li", {}, "Support"),
//         ce("li", {}, "Home"),
//     ]),
//     heading2,
//   ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);
// root.render(heading3);
root.render(<HeaderComponent />);
