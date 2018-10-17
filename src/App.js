import React, { Component } from 'react';

import './App.css';
// import Buttons from './components/buttons';
import ButtonContainer from './containers/ButtonContainer';
import Quote from './components/quote';
// import generateQuote from './actions/generateQuote';
// import updateQuote from './actions/updateQuote';
// import generateColor from './actions/generateColor';
// import updateColor from './actions/updateColor';
import {connect} from 'react-redux'

class App extends Component {
  
  // constructor(props) {
  //   super(props);

  //   // this.generateQuote = generateQuote.bind(this);
  //   // this.updateQuote = updateQuote.bind(this);
  //   // this.generateColor = generateColor.bind(this);
  //   // this.updateColor = updateColor.bind(this);
  //   // this.generateNew = this.generateNew.bind(this);
  // }

  componentWillMount() {
    // console.log(generateQuote());
  }

  render() {
    console.log(this.props);
    document.body.style.background = this.props.color;
    
    // console.log(this.props);
    return (
      <div id="quote-box">
        <Quote currState = {{...this.props}}/>
        <ButtonContainer color = {{...this.props.color}} />
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  quote: state.quoteReducer.quote,
  author: state.quoteReducer.author,
  work: state.quoteReducer.work,
  color: state.colorReducer.color
});

export default connect(mapStateToProps)(App);
