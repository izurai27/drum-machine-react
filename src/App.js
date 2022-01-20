import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      keyboard : [
        {id:1,letter:'Q', sound:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
        {id:2,letter:'W',sound:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'} ,
        {id:3,letter:'E',sound:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'} ,
        {id:4,letter:'A',sound:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'}, 
        {id:5,letter:'S',sound:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'}, 
        {id:6,letter:'D',sound:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
        {id:7,letter:'Z',sound:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'} , 
        {id:8,letter:'X',sound:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
        {id:9,letter:'C',sound:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'} 
      ]
    }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(event){
    // event.target.children.play();
    document.getElementById(event.target.innerText).play();
  
  }

  handleKey(event){
    console.log(event.key)
  }
  
  render(){
    
    return (
      <div id="drum-machine">
        <div id="display"></div>
        {this.state.keyboard.map( keyb => 
        <button key={keyb.id} className="drum-pad" onClick={this.handleClick} onKeyPress={this.handleKey}> {keyb.letter}
          <audio className='clip' id={keyb.letter} >
              <source src={keyb.sound} type="audio/mpeg"/>
          </audio>
        </button> )
        }
      </div>  
    )

    
  }
}



export default App;
