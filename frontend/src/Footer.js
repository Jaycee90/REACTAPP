// Footer component implemented as class with state
import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props); //chain to my superclass's constructor
    this.state = {
      currentTime: new Date().toLocaleTimeString(), // State for current time
    };

    // Update current time every second
    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    return (
      <footer>
        <p style={{ borderRadius: "30px", backgroundColor: "rgba(226,100,172,1)", height: "40px",width:'200px', marginBottom: '2px', display: 'inline-block', textAlign: 'center', lineHeight: '50px'}}>
          Current Time: {this.state.currentTime}
        </p>

        <p>
          <small>&copy; 2023 Jayce Turambe. All Rights Reserved.</small>
          <small>Why did the web developer stay calm during the project? Because he knew how to handle exceptions!</small>
          <small>Did you know that the first computer bug was a literal bug? In 1947, a moth caused a computer malfunction!</small>
        </p>
      </footer>
    );
  }
}

export default Footer;
