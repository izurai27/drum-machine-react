// import logo from './logo.svg';
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
      ],
      display:''
    }
    this.handleClick=this.handleClick.bind(this);
    this.handleKey=this.handleKey.bind(this);
  }

  handleClick(event){
    // event.target.children.play();
    document.getElementById(event.target.innerText).play();
    this.setState({
      display:event.target.id
    })
  
  }

  handleKey(event){
    console.log(event.key)
  }

  componentDidMount() {
    document.addEventListener('keydown', function(event){
      console.log(event.key.toUpperCase(),document.getElementById(event.key.toUpperCase()));
      document.getElementById(event.key.toUpperCase()).play();
      
      // this.setState({
      //   display:event.key
      // })
    })
  }
  
  render(){
    
    return (
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <div id="display">{this.state.display}</div>
        <br/>
        <div className='container'>
          {this.state.keyboard.map( keyb => 
            <button id={'button'+keyb.letter} key={keyb.id} className="drum-pad" onClick={this.handleClick}> {keyb.letter}
              <audio className='clip' id={keyb.letter} src={keyb.sound} type="audio/mpeg"/>
              
            </button> )
          }
        </div>
      </div>  
    )

    
  }
}



export default App;
