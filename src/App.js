import React, { Component } from 'react';

import './App.css';
import Buttons from './components/buttons';
import Quote from './components/quote';
import generateQuote from './actions/generateQuote';
import updateQuote from './actions/updateQuote';
import generateColor from './actions/generateColor';
import updateColor from './actions/updateColor';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: '',
      work:'',
      color: ''
    }

    this.generateQuote = generateQuote.bind(this);
    this.updateQuote = updateQuote.bind(this);
    this.generateColor = generateColor.bind(this);
    this.updateColor = updateColor.bind(this);
    this.generateNew = this.generateNew.bind(this);
  }

  generateNew() {
    this.generateColor();
    this.generateQuote();
  }

  componentWillMount() {
    this.generateNew();
  }

  render() {
    document.body.style.background = this.state.color;
    return (
      <div id="quote-box">
        <Quote currState = {{...this.state}}/>
        <Buttons color = {this.state.color} generateNew = {this.generateNew}/>
      </div>

    );
  }
}

export default App;
