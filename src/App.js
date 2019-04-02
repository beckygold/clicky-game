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

  // Array of images with paths
  const images = [
  { id: 1, src: ".public/images/charlotte-vandertunt.png" },
  { id: 2, src: ".public/images/crackers.png" },
  { id: 3, src: ".public/images/crackers-and-noah.png" },
  { id: 4, src: ".public/images/howler-monkey.png" },
  { id: 5, src: ".public/images/loose-goose.png" },
  { id: 6, src: ".public/images/malory-archer.png" },
  { id: 7, src: ".public/images/pam-poovey.png" },
  { id: 8, src: ".public/images/princess-lanaluakalani.png" },
  { id: 9, src: ".public/images/princess-lanaluakalani-02.png" },
  { id: 10, src: ".public/images/reynaud.png" },
  { id: 11, src: ".public/images/siegbert-fuchs.png" },
  { id: 1, src: ".public/images/sterling-archer.png" }
  ];

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
        <Image 
        // Use a map here
        name={props.name}
        // process.env.PUBLIC_URL will look in the public folder for the images
        // image={process.env.PUBLIC_URL + (passed parameter from map).image(?)}
        />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
