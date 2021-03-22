import React, { Component } from 'react'

class CopyDemo extends Component {
  handleCopy(){
    alert('STOP STEALING FROM ME')
  }
  render() {
    return(
      <div>
        <h3>Try copying some of this text:</h3>
        <section style={{ width: "300px", display: "inline-block" }}
        onCopy={this.handleCopy}>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id turpis erat. Nulla a tellus sollicitudin, imperdiet nulla quis, dignissim felis. Vestibulum cursus metus vitae ipsum pharetra blandit. Aliquam gravida ipsum arcu, quis egestas massa sodales eu. Phasellus enim felis, auctor porttitor tristique eget, auctor quis nisi. Integer nec orci metus. Nulla mattis ac mauris ac imperdiet. Curabitur feugiat dignissim venenatis. Vestibulum hendrerit nisl in erat porta, et vulputate enim ornare. Vestibulum venenatis magna non augue dictum hendrerit. Sed ultrices a felis id cursus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et turpis in leo scelerisque semper. Pellentesque sit amet congue orci. Vestibulum facilisis a purus quis varius. 
        </section>
      </div>
    )
  }
}
export default CopyDemo;