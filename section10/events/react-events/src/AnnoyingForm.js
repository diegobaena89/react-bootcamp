import React, { Component } from 'react'

class AnnoyingForm extends Component {
  handleKeyUp(e) {
    if(e.keyCode === 56){
      alert('56th CHARACTER')
    } else {
      alert ('BOO!')
    }
  }
  render() {
    return (
      <div>
        <h3>Try typing in here:</h3>
        <textarea onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}
export default AnnoyingForm
