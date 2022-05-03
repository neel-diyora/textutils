import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    // setText("You have to clicked on handleUpClick"); 
    let newText = text.toUpperCase();
    setText(newText);
    if(text.length >= 1){
      props.showAlert("Converted to uppercase!", "success");
    } else {}
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if(text.length >=1){
      props.showAlert("Converted to lowercase!", "success");
    } else {}
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    if(text.length >=1){
      props.showAlert("Text cleared!", "success");
    } else {}
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }

  const handleCopy = () => {
    // console.log("I'm copy");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    if(text.length){
      props.showAlert("Copied to Clipboard!", "success");
    } else {}
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if(text.length){
      props.showAlert("Extra spaces removed!", "success");
    } else {}
  }

  // const [text, setText] = useState("Enter text here");
  const [text, setText] = useState("");
  // text = "New text"  --> wrong way to change the state
  // setText("Enter text here2"); --> correct way to change the state   
  return (
    <>
    <div className='container'>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here'>{text}</textarea>
        </div>
        <button className="btn btn-primary mx-4 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-4 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-4 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-5">
        <h2>Your text summary</h2>  
        {/* <p> {text.split(/[ ]+/).join("").length} words and {text.length} characters</p> */}
        <p> {text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        {/* <p>{text}</p> */}
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
