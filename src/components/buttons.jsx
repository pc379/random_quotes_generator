import React, {Component} from "react";

export default class Buttons extends Component {

    render() {
        // console.log(this.props);
        return (
            <div id="buttons">
                <a style = {{backgroundColor: this.props.color}} className= "btn" id="tweet-quote" href="https://www.twitter.com/intent/tweet">Twitter</a>
                <a style = {{backgroundColor: this.props.color}} className= "btn" id="tumblr-quote" href="# ">Tumblr</a>
                <button style = {{backgroundColor: this.props.color}} className = "btn" id="new-quote" onClick = {this.props.generateNew}>New Quote</button>
            </div>
        )
    }
}