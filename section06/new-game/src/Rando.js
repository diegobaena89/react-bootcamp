import React, { Component } from 'react'

class Rando extends Component{
  constructor(props){
    super(props);
    this.state ={ num : 1};
    this.rowDice = this.rowDice.bind(this)
  }
  rowDice(){
    //pick a random number 1 - 10
    let rand  = Math.floor(Math.random() * 10)+1;
    // update state with new rand
    this.setState({num: rand})
  }
  render(){
    return(
      <div>
      <h1>Dice Game</h1>
      <h2>Your number ir: {this.state.num}</h2>
      {this.state.num === 7 ? <h2>YOU WIN!</h2> :
      
      <button
      onClick={this.rowDice}
      >Row Dice!</button>
      }
      <hr />
      </div>
    )
  }
}

export default Rando;