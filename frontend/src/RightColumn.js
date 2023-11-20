// RightColumn component implemented as classe with states
import React, { Component } from 'react';

class RightColumn extends Component {
  constructor(props) {
    super(props);       //chain to my superclass's constructor
    this.state = {
      clickCount: 0,     // state for clock count
      date: new Date(), //state is an object with one property (current time)
    };
  }
  
  // Handling click event
  handleClick = () => {
    this.setState((prevState) => ({
      clickCount: prevState.clickCount + 1,
    }));
  };
  
  // Lifecycle event, runs once after component is loaded
  // setInterval is a JavaScript function to establish a timer
  // timerHandle = setInterval( popHandler, interval);
  // popHandler = function to call when the timer expires
  // interval = timer interval in milliseconds
  // returns a handle to the timer, needed for later referen
  componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 1000 );
  }

  // lifecycle event, runs when component is going away (like a destructor)
  // clearInterval(timerHandle) cancels the timer
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  // My handler for the timer pop event. Update the date
  // (within the state property, via setState) to the time
  tick() {
    this.setState({ date: new Date()});
  }

  //the render method returns what the component actually displays, i.e.
  // what gets inserted into the dom/html document. must be a single element 
  // (nesting is ok), wrap (if necessary) with <div>, <span>, or even <>
  render() {
    return (
      <div>
        <p>
          This component features a button that, when clicked, updates and displays the click count in real-time 
          within the app. It offers a quick and visual way to track user interaction and engagement.
          It also updates clock that is Implemented as a Class Component.
        </p>

        <button onClick={this.handleClick} style={{borderRadius:"30px", backgroundColor:"rgba(226,100,172,1)",  height:"40px", marginTop:'4px'}}>Click Me</button>
        <p>Click Count: {this.state.clickCount}</p>

        <h2>Tick-Tock Code Block: Classy Time Display In Action!</h2>
        <p style={{ borderRadius: "30px", backgroundColor: "rgba(226,100,172,1)", height: "40px",width:'200px', marginBottom: '2px', display: 'inline-block', textAlign: 'center', lineHeight: '50px', color: 'black'}}>
        <strong>Current Time: {this.state.date.toLocaleTimeString()}</strong>
        </p>
      </div>
    );
  }
}

export default RightColumn;