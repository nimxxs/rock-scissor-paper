import React, { Component } from 'react'
import './App.css';
import BoxClass from './component/BoxClass';

const choice = {
    rock:{
      name:"Rock",
      img:"/img/rock.png"
    },
    scissor:{
      name:"Scissor",
      img:"/img/scissor.png"
    },
    paper:{
      name:"Paper",
      img:"/img/paper.png"
    }
  }

export default class AppClass extends Component {
    constructor() {
        super()
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: ""
        };
    }

    play = (userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(choice[userChoice], computerChoice)
        });
    }

    judgement = (user, computer) => {
        console.log("user", user, "computer", computer);
    
        if (user.name === computer.name) {
          return "😏TIE😏";
        } else if (user.name === "Scissor")
            return computer.name === "Paper" ? "👑WIN👑" : "😭LOSE😭";
          else if (user.name === "Rock")
            return computer.name === "Scissor" ? "👑WIN👑" : "😭LOSE😭";
          else if (user.name === "Paper")
            return computer.name === "Rock" ? "👑WIN👑" : "😭LOSE😭";
      }

    randomChoice = () => {
        let itemArray = Object.keys(choice); // Object.keys 는 객체의 키 값만 뽑아서 array로 만들어주는 함수임.
        let randomItem = Math.floor(Math.random()*itemArray.length); // 랜덤 숫자 만들기
        let final = itemArray[randomItem];
        console.log("randomChoice 반환값", choice[final])
        return choice[final];
      }

  render() {
    return (
        <div>
        <div className='gameName'>GAME</div>
        <div className='gameName2'>START</div>
        <div className="main">
          <BoxClass title="YOU" item={this.state.userSelect} result={this.state.result}/>
          <BoxClass title="COMPUTER" item={this.state.computerSelect} result={this.state.result}/>
        </div>
        <div className='main'>
          <button className="rspButton" onClick={() => this.play("scissor")}>가위</button>
          <button className="rspButton" onClick={() => this.play("rock")}>바위</button>
          <button className="rspButton" onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    )
  }
}
