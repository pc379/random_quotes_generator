import React, {Component} from 'react';

export default class Quote extends Component {

    render() {
        return (
            
            <div style={{color: this.props.currState.color}}>
                <img id="quotes-icon" alt="quotations" src='quotes.svg' style={{fill: this.props.currState.color}}/>
                <span id="text"> {this.props.currState.quote} </span>
                <img id="quotes-icon" alt="quotations" src='down-quotes.svg' style={{borderColor: this.props.currState.color}}/>
                <p id="author">- {this.props.currState.author}, <em>{this.props.currState.work}</em></p>
            </div>
           
        )
    }
}