import React, { Component } from 'react';
import Classes from './component/class/Classes'
import Functional from './component/functional/Functional'

class App extends Component{
  state = {
    number:0
  }
addHandler = () =>{
  let num = this.state.number
  this.setState({number: num + 1})
}
minHandler = () =>{
  let num = this.state.number
    this.setState({number: num - 1})
}
  render(){
    return(
      <div>
        <Classes/>
        <Functional number={this.state.number} added={this.addHandler} min={this.minHandler}/>
      </div>
    )
  }
}

export default App;
