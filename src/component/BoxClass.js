import React, { Component } from 'react'

export default class BoxClass extends Component {
    constructor() {
        super();
        this.result = "";
    }

  render() {
    if (this.props.title === "COMPUTER" && this.props.result != "😏TIE😏" && this.props.result !== "") {
        this.result = this.props.result === "👑WIN👑" ? "😭LOSE😭" : "👑WIN👑";
    } else {
        this.result = this.props.result;
    }
    return (
        <div className={`box ${this.result}`}>
        <h1 className='textSize'>{this.props.title}</h1>
        <img className='imgSize' src={this.props.item && this.props.item.img}/>
        <h2 className='textSize'>{this.result}</h2>
    </div>
    )
  }
}
