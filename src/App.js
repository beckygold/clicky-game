import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import './App.css';

class App extends Component {
  state = {
    score,
    clicked
  };

// Listen for clicks
  clickTile = () => {
    // Check to see if image has been clicked already

    // If clicked = false, +1 to score

    // Change clicked: false > clicked: true
  }

  // Map over tiles to render each image
  render() {
    return (
      <Wrapper>
        <NavBar>Clicky Game</NavBar>
        <Header> </Header>
        <Tiles />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
