import React, { Component } from "react";

class WiseSquare extends Component {
  dispenseWisdom() {
    let messages = [ "message1.", "message2", "message3",
    ];
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  }

  render() {
    return (
      <div className="WiseSquare"
           onMouseEnter={this.dispenseWisdom}>
        😃
      </div>
    );
  }
}

export default WiseSquare;