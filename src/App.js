import React, { useState } from 'react';
import ValueIncrease from './practices/ValueIncrease';
import Time from './practices/Time';
import InputForm from './practices/InputForm'
import HandlingInputComplexform from './practices/HandlingInputComplexform';
import { SpreadOperator } from './practices/SpreadOperator';
import PracticeuseEfeect from './practices/PracticeuseEfeect';
import ApiUseEffect from './practices/ApiUseEffect';
import './App.css';
import RouteConfig from './Routes';
import Footer from './practices/Footer';

import Menu from './practices/Menu';


function App() {



  let [bg, setBg] = useState('red');
  let [text, setText] = useState("Clicked me")
  const ChangeBackground = () => {
    setBg('blue');
    setText("ouch");
  }
  const ChangeText = () => {
    setBg('purple');
    setText("helo");
  }

  return (
    <div className="App" style={{ backgroundColor: bg }}>
      
      <ValueIncrease />
      <Time />
      <h1>Change Backgtound Color</h1>
      <button onMouseEnter={ChangeBackground} onMouseLeave={ChangeText}>{text}</button>
      <InputForm />
      <div style={{ backgroundColor: "royalblue" }}>
        <HandlingInputComplexform />
        <SpreadOperator />
        <PracticeuseEfeect />
        <ApiUseEffect />
        <br />
        <RouteConfig />
        
        <Footer />
        
      </div>
    </div>


  );
}

export default App;
