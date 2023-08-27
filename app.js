const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "This is the h1 tag"),
    React.createElement("h2", { id: "h2" }, "This is the h2 tag"),
  ])
);
console.log(parent); //return Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
