import React, { Component } from 'react';
import logo from './quotes.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <React.Fragment>
      <div>
            <img id="quotes-icon" alt="quotations" src={logo} />
            <span id="text">The person who says it cannot be done should not interrupt the person who is doing it.</span>
        </div>
        <p id="author">- Some Author</p>
        
        <div id="sub-content">
            <a id="tweet-quote" href="https://www.twitter.com/intent/tweet">Twitter</a>
            <span id="tumblr-quote">Tumblr</span>
            <span><button id="new-quote">New Quote</button></span>
        </div>
        </React.Fragment>
    );
  }
}

export default App;
