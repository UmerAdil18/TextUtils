import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const OnChange = (e) => {
    setText(e.target.value);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const clearText = () => {
    if (window.confirm("Are you sure?")) {
      setText("");
      props.showAlert("Text is cleared", "success");
    } else {
      setText(text);
      props.showAlert("Text is save", "success");
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
    document.getSelection().removeAllRanges();
  };

  let characters = text.length;
  let words = text.split(" ").filter(Boolean).length;
  let readTime = words * 0.008;

  // console.log(props.mode, "this is mode");
  return (
    <div
      className="layout"
      style={{
        width: "100%",
        backgroundColor: props.mode === "dark" ? "#000557" : "white",
        color: props.mode === "dark" ? "white" : "black",
        paddingBottom: "50px",
      }}
    >
      <div className="container mb-5 pt-5" style={{ width: "100%" }}>
        <div className="container">
          <h1 className="mb-3">{props.heading}</h1>
          <div className="">
            <textarea
              className="form-control"
              placeholder="Enter Your Text Here"
              value={text}
              style={{
                backgroundColor: props.mode === "dark" ? "#000557" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              onChange={OnChange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>

          <button
            disabled={text.length === 0}
            onClick={handleUpCase}
            className="btn btn-primary mx-1 my-1 mt-2"
          >
            Convert To Upper Case
          </button>

          <button
            disabled={text.length === 0}
            onClick={handleLowerCase}
            className="btn btn-primary mx-1 my-1 mt-2"
          >
            Convert To Lower Case
          </button>

          <button
            onClick={clearText}
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1 mt-2"
          >
            CLear Text
          </button>
        </div>
        <div className="container my-2">
          <h1>your Text Summary</h1>
          <p>
            {words} words , {characters} characters
          </p>
          <h1>Time to read this text</h1>
          <p>{readTime} mins </p>
          <h2>Preview</h2>
          <p>{text === "" ? "Enter Something To Preview" : text}</p>

          <button
            onClick={copyText}
            disabled={text.length === 0}
            className="btn btn-primary mx-2"
          >
            Copy Text
          </button>
        </div>
      </div>
    </div>
  );
}
