//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
//get a refference to the div with the ID root, and tell react to control that element:
const root = ReactDOM.createRoot(document.getElementById("root"));

// //create a component:
// function App() {
//   return <input placeholder="hi there" />;
// }

//Show the component:

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
