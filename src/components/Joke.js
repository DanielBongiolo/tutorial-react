import React from "react";

function Joke(props) {
  return (
    <div>
      <h1
        style={{
          color: "red",
          display: props.question ? "flex" : "none",
          fontSize: "50px",
          justifyContent: "center",
          border: "5px solid black",
        }}
      >
        {props.question}
      </h1>
      <h3 className="Header3">{props.punchLine}</h3>
    </div>
  );
}

export default Joke;
