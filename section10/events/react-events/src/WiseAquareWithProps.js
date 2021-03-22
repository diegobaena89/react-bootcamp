import React, { Component } from "react";

class WiseSquareWithProps extends Component {
  constructor(props){
    super(props);
    this.dispenseWisdom = this.dispenseWisdom.bind(this)
  }
    static defaultProps ={
      messages: [ "message1.", "message2", "message3",
    ]
  }
  dispenseWisdom() {
    console.log('THIS IS...', this)
    let {messages} = this.props;
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

export default WiseSquareWithProps;