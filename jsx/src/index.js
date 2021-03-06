// import React and ReactDom
import React from "react";
import ReactDOM from "react-dom";

// create a react component
const App = () => {
  const buttonText = "ClickMe";
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
