import React,{useState} from 'react'

export default function TextForm(props) {

    

const Uppercase=()=>
{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted To UpperCase","success");
}
const handler=(event)=>
{
    setText(event.target.value);
}
const lowercase=()=>
{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted To LowerCase","success");

}
const clear=()=>
{
    let newtext='';
    setText(newtext);
    props.showAlert(" Text is cleared","success");

}
const Extraspace=()=>{
    let newtext=text.replace(/\s+/g, ' ').trim();
    setText(newtext);
    props.showAlert(" Extra Spaces Are Removed","success");

}
const Copy=()=>{
   
    var text=document.getElementById("myBox")
    if(text!=='')
    {
    text.select();
    navigator.clipboard.writeText(text.value);
   }
   props.showAlert(" Text is copied","success");
   
   
}

const [text,setText]=useState("");
    return (  
         
<>
       <div className="container my-3"  style={{color:props.mode==='dark'?'white':"#31383f"}}>
           <h3>Enter text Here</h3>
  <div className="mb-3">
    
    <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handler} style={{backgroundColor:props.mode==='dark'?"#31383f":'white'}}></textarea>
    </div>  
    <button className="btn btn-primary mx-1 mb-2" onClick={Uppercase}>UpperCase</button>
    <button className="btn btn-primary mx-1 mb-2" onClick={lowercase}>LowerCase</button>
    <button className="btn btn-primary mx-1 mb-2" onClick={clear}>clear</button>
    <button className="btn btn-primary mx-1 mb-1" onClick={Extraspace}>Remove Extra Space</button>
    <button className="btn btn-primary mx-1 mb-1" onClick={Copy} >Copy</button>


  
  </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':"#31383f"}}>
      <h4>Your Text Summary</h4>
        <p >Your text lenght is {text===''?"0":text.length}</p>
        <p>Your Text words is {text===''?"0":text.split(" ").length}</p>   
        <p>Time to read is {text===''?"0":0.008*text.split(" ").length} mintues</p>
        <p>No of sentences {text.split(".").length-1}</p>
        
        <h4>Preview</h4>
      <p>{text===''? "Enter Something In Box To Preview Here " :text}</p>
  </div>
  
  </>  
    )
}
TextForm.defaultProps={
    text : "Enter Heading here"
}
