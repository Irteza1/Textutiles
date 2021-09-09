import React,{useState} from 'react'
import Navbar from '../src/components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';

import Alert from './components/Alert';
/*
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
*/

function App() {
  const [mode, setmode] = useState('light');

  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
     setalert({
        message:message,
        type:type
              })
  }
 /* const toggleRed=()=>
  {
    if(mode==='#ff0000')
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light Mode Is Enabled","success");

    }
    else
    {
      setmode('ff0000');
      document.body.style.backgroundColor='pink';
      showAlert("  RedMode Is Enabled","success");

    }
  }
  */
  const toggleMode=()=>{
    if(mode==='dark')
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light Mode Is Enabled","success");
      

    }
    else
    {
      setmode('dark');
      document.body.style.backgroundColor='#31383f';
      showAlert(" Dark Mode Is Enabled","success");

    }
  }
  setTimeout(() => {
    setalert(null);
  }, 2500);

  
  return (
    /*
    <>
    <Router>
    <Navbar title="Text Editor" about="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>          
    
     
    <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/">
          <div className="container my-8">
      <TextForm showAlert={showAlert} text="Enter Text To Analyze" mode={mode} />
    </div>
          </Route>
        </Switch>
        </Router>
        
    </>
    */

    <>

    <Navbar title="Text Editor" about="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>          
    
     
    
          
          <div className="container my-8">
      <TextForm showAlert={showAlert} text="Enter Text To Analyze" mode={mode} />
    </div>
    </>
    
  );
}

export default App;
