import React, {useState}  from "react";

export default function Textform(props) {
  const handleUpClick= ()=>{
    let newText= text.toUpperCase();
    setText(newText);
  }
  
  const handleLoClick= ()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }

  const handleType=()=>{
    let newText='';
    setText(newText);
  }
  const handleOnChange= (event)=>{
    
    setText(event.target.value);
  }

  const [text,setText]=useState('');
   
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
      <div class="mb-3" style={{backgroundColor: props.mode==='dark'?'grey':'white' ,color: props.mode==='light'?'dark':'white'}}>
        <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleType} >Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h3>Your Text Summary:</h3>
    <h5>Word Count:{text.split(" ").length}</h5>
    <h5>Character Count{text.length}</h5>
    <h5>Preview:</h5>
    <p>{text}</p>
    </div>
    </>
  );
}
