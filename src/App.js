import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
//passing props in Navbar change here and reflects everywhere in the component
function App() {
  const [mode,setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title="TeXtUtils" aboutus="About TeXtUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <Textform heading="Enter your Text Here"/>

    </div>
    </>
  );
}

export default App;
