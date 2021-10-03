import React, { Component } from 'react';
import {Display} from './Display';
import './App.css';
import reactLogo from './reactjs-icon.svg';


let name = "Damian";
const city = "Wrolove";

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      city: "Wroclaw"
    }
  }
  changeCity = () => {
    this.setState({ city: this.state.city === "Wroclaw" ? "Opole" : "Wroclaw"})
  }

  render(){
    return(
      <>
        <Display value={this.state.city} callback={this.changeCity}></Display>
      </>
    )
  }
}

 
export default App;

