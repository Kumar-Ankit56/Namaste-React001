//Creating two sibiling chiderean with two adject h1 element this is how we can do it.
import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "This is the h1 tag"),
    React.createElement("h2", { id: "h2" }, "This is the h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "This is the h1 tag"),
    React.createElement("h2", { id: "h2" }, "This is the h2 tag"),
  ]),
]);
console.log(parent); //return Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);