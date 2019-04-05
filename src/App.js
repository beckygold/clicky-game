import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Image from './components/Image';
import Footer from './components/Footer';
import images from "./images.json";
import './App.css';

class App extends Component {
  state = {
    // score,
    images,
    // clicked
  };


// Listen for image clicks
  clickImage = event => {
    event.preventDefault()

    console.log(event.target.src)
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
        {/* <NavBar> </NavBar> */}
        {/* <Header> </Header> */}
        {/* Map over images array to render image thumbnails */}
        {this.state.images.map(image => (
          
          <Image 
            clickFunction={this.clickImage}
            key={image.id}
            id={image.id}
            name={image.name}
            src={process.env.PUBLIC_URL + image.src}
          // process.env.PUBLIC_URL will look in the public folder for the images
          // image={process.env.PUBLIC_URL + (passed parameter from map).image(?)}
          />
          ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
