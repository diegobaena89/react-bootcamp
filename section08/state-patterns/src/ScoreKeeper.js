import React, { Component } from 'react'
import './ScoreKeeper.css'

class ScoreKeeper extends Component {
  constructor(props){
    super(props);
    this.state = { score: 0 }
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this)
  }
  singleKill(){
    this.setState({ score: this.state.score + 1 });
  }
//tripleKill(){
//  this.setState(st => {return { score: st.score + 1 }})
//  this.setState(st => {return { score: st.score + 1 }})
//  this.setState(st => {return { score: st.score + 1 }})
//}
incrementScore(curState){
  return {score: curState.score + 1}
}
tripleKill(){
  this.setState(this.incrementScore);
  this.setState(this.incrementScore);
  this.setState(this.incrementScore);
}

  render(){
    return (
      <div className="ScoreKeeper">
        <h1>Score is: {this.state.score}</h1>
        <div>
        <button onClick={this.singleKill}>Single Kill</button>
        <button onClick={this.tripleKill}>Triple Kill</button>
        </div>
      </div>
    )
  }
}
export default ScoreKeeper;