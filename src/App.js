import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      keyboard : ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
    }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(event){
    // event.target.children.play();
    console.log(event.target.audio);
  }
  render(){
    
    return (
      <div id="drum-machine">
        <div id="display"></div>
        {this.state.keyboard.map( keyb => 
        <div className="drum-pad" onClick={this.handleClick}> {keyb}
          <audio className='clip' id={keyb} >
              <source src="./sounds/Q.mp3" type="audio/mpeg"/>
          </audio>
        </div> )
        }
      </div>  
    )

    
  }
}



export default App;
