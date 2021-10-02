import React, { Component } from 'react';
import {Display} from './Display';
import './App.css';
import reactLogo from './reactjs-icon.svg';


let name = "Damian";
const city = "Wrolove";

class App extends Component {
  messeage = (cash) => `Użytkownik ${name} z miasta ${city} zarabia ${cash}zł`
  render(){
    return (
      <div className="text-center">
          <h4 className="bg-primary text-white text-center p-3">
            {this.messeage(3000)}
          </h4>
          <img src={reactLogo} alt="logo" />
      </div>
    )
  } 
   
  
}
 
export default App;

