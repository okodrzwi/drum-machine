import React, { Component } from 'react';
import './App.css';
import PadBank from "./components/PadBank";
  
const soundsArray = [

    {
    keyCode:81,
    keyTrigger:"Q",
    name:"KeyQ",
    source:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
      {
    keyCode:87,
    keyTrigger:"W",
    name:"KeyW",
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
        {
    keyCode:69,
    keyTrigger:"E",
    name:"KeyE",
    source:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },               
          {
    keyCode:65,
    keyTrigger:"A",
    name:"KeyA",
    source:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
            {
    keyCode:83,
    keyTrigger:"S",
    name:"KeyS",
    source:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
              {
    keyCode:68,
    keyTrigger:"D",
    name:"KeyD",
    source: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
{
    keyCode:90,
    keyTrigger:"Z",
    name:"KeyZ",
    source:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
    {
    keyCode:88, 
    keyTrigger:"X",
    name:"KeyX",
    source:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
    {
    keyCode:67,
    keyTrigger:"C",
    name:"KeyC",
    source:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },              
]


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name:""
    }
    this.updateDisplay = this.updateDisplay.bind(this);
  }
  updateDisplay(name) {
    this.setState({
      name:name
    })
  }
  render() {
    return (
      <div>
      <PadBank
        padBank={soundsArray}
        updateDisplay={this.updateDisplay}>
        
      </PadBank>
      <p id="display"> tu powinien się wyświetlić klawisz   {this.state.name}</p>
      </div>
    )
  }

}
export default App;
