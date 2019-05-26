import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Lamp from "./Lamp";
import Quote from "./Quote";

class App extends Component {
  constructor (){
    super();
    this.state ={
      working:false
    }
  }
  handleClick = () => {
    this.setState({working:!this.state.working})
  };

  render() {
    let className = 'App-logo';
    if (this.state.working) {
      className += ' menu-active';
    }
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className={className} alt="logo" />
            <h1 className="App-title">Simpsons Quotes</h1>
          </header>
          <Lamp on />
          <Lamp />
          <button onClick={this.handleClick}>
            Marge !
          </button>
          <Quote
              quote="I believe the children are the future... Unless we stop them now!"
              character="Homer Simpson"
              image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
          />
          <Quote
              quote="Me fail English? That's unpossible"
              character="Ralph Wiggum"
              image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
          />
        </div>
    );
  }
}

export default App;