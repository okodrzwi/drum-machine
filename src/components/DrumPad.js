import React from 'react';

class DrumPad extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleKey = this.handleKey.bind(this);
    this.playSound = this.playSound.bind(this);
  };
  componentDidMount() { document.addEventListener("keydown", this.handleKey); }
  componentWillUnmount() { document.removeEventListener("keydown", this.handleKey) };

  handleKey(event) {
    if (event.keyCode==this.props.keyCode) {     
      this.playSound();
    }
  };  
  playSound() {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.play();
    this.props.updateDisplay(this.props.name);
  };
  render() {
    return (    
      <div className="drum-pad"
        id={this.props.keyCode}
        onClick={this.playSound}
        soundName= {this.props.soundName}        
      >
       
        {this.props.keyTrigger}
        <audio className='clip'
          id={this.props.keyTrigger}
          src={this.props.source}
        />
      </div>   
    )
  }
}
export default DrumPad;