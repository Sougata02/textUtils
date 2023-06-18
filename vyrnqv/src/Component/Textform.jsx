import React, { useState } from "react";
export default function Textform(props) {
  const [text, setText] = useState("");
  const updateToLower = (e) => {
    let text1 = text.toLowerCase();
    setText(text1);
    props.showAlert("Converted to LowerCase", "success");
  };
  const updateToUpper = () => {
    let text1 = text.toUpperCase();
    setText(text1);
    props.showAlert("Converted to UpperCase", "success");
  };
  const update = (e) => {
    setText(e.target.value);
  };
  return (
    <div class={`container text-${props.mode === "dark" ? "light" : "dark"}`}>
      <h1>Enter to explore something new</h1>
      <div class="mb-3">
        <textarea
          class={`form-control bg-${
            props.mode === "dark" ? "dark" : "white"
          } text-${props.mode === "light" ? "dark" : "light"}`}
          id="exampleFormControlTextarea1"
          onChange={update}
          value={text}
          rows="8"
        ></textarea>
      </div>
      <button
        type="button"
        class="btn btn-primary mx-2"
        onClick={updateToUpper}
      >
        Convert To UpperCase
      </button>
      <button
        type="button"
        class="btn btn-primary mx-2"
        onClick={updateToLower}
      >
        Convert To LowerCase
      </button>
      <h2 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
        Text Summary
      </h2>
      <h3 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
        <b>
          Total words={text.split(" ").length}, Total Characters={text.length}
        </b>
      </h3>
      <h2 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
        Text Preview
      </h2>
      <h3 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
        <b>{text[0] !== " " ? text : "Enter something to preview"}</b>
      </h3>
    </div>
  );
}
