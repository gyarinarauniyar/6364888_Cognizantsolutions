import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    // Binding sayWelcome
    this.sayWelcome = this.sayWelcome.bind(this);
  }

  // Increment calls two methods
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
    this.sayHello();
  };

  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayHello = () => {
    alert("Hello! Have a great day.");
  };

  sayWelcome(message) {
    alert(`Say ${message}`);
  }

  handleSyntheticEvent = (event) => {
    alert("I was clicked");
    console.log(event); // SyntheticEvent object
  };

  render() {
    const mainHeadingStyle = { color: "green" };
    const buttonStyle = {
      backgroundColor: "#007BFF",
      color: "white",
      padding: "8px 16px",
      margin: "5px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer"
    };

    return (
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        {/* Only this heading in green */}
        <h1 style={mainHeadingStyle}>Event Examples App</h1>

        {/* Other headings normal */}
        <h2>Counter: {this.state.counter}</h2>
        <button style={buttonStyle} onClick={this.incrementCounter}>Increment</button>
        <button style={buttonStyle} onClick={this.decrementCounter}>Decrement</button>

        <hr />

        <h2>Say Welcome Button</h2>
        <button style={buttonStyle} onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>

        <hr />

        <h2>Synthetic Event Example</h2>
        <button style={buttonStyle} onClick={this.handleSyntheticEvent}>OnPress</button>

        <hr />

        {/* Currency Convertor component (its own heading green) */}
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
