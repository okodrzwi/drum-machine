import React from 'react';
import DrumPad from "./DrumPad"

class PadBank extends React.Component {
  constructor(props) {
    super(props);  
  }

  render() {
    let padBank;
              padBank = this.props.padBank.map((clip, index, soundsArray) => {
              return (
                <DrumPad 
                  keyTrigger={soundsArray[index].keyTrigger} 
                  source={soundsArray[index].source}
                  keyCode={soundsArray[index].keyCode}
                  name={soundsArray[index].name}
                  updateDisplay={this.props.updateDisplay}
                >
                </DrumPad>
                
              )
            },
            )
      return (        
          <div id="drum-machine">
          {padBank}

          
        </div>
      );
    }
  
};
export default PadBank;