import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Image from './components/Image';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  state = {
    // score,
    // clicked
  };

// Listen for image clicks
  clickImage = () => {
    // Check to see if image has been clicked already

      // If clicked = false, +1 to score

        // Change 'clicked: false' -> 'clicked: true'

        // Alert user of correct guess

        // Shuffle images
    
    // If clicked = true, set score to 0

      // Reset all images clicked value to false

      // Alert user of incorrect guess

      // Shuffle images
  }

  render() {
    return (
      <Wrapper>
        <NavBar> </NavBar>
        <Header> </Header>
        <Image />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
