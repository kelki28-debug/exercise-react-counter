import React, { Component } from 'react';

import './Classes.css'

class Classes extends Component{
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
resetHandler = () =>{
    this.setState({number:0})
}

    render(){
        if(this.state.number < 0){
            alert('Nilai Tidak Boleh Negatif')
        }
        return(
            <div>
            <h1>Count: {this.state.number}</h1>
            <button onClick={this.addHandler} className="plus">+</button>
            <button onClick={this.minHandler} className="min">-</button>
            <button onClick={this.resetHandler} className="reset">Reset</button>
        </div>
        )
    }
}
export default Classes;