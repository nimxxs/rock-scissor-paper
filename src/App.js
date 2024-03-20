// UI를 바꾸게 하고 싶다면 state를 만들어야 함.
import {useState} from "react";
import './App.css';
import Box from './component/Box';

// 아이템과 숫자를 연결시키는 방법 => 배열을 통해..
// 그래서 choice 객체를 배열화 시킴.
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

function App() {
  // state
  const [userSelect, setUserSelect] = useState(null); // 처음에 어떤 값이 들어갈지 모르니 null
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  // 컴퓨터가 랜덤한 값을 나오게 하려면?
  // 유저가 값을 선택했을 때 컴퓨터의 랜덤 값이 나와야함.
  // 즉, play 함수가 실행 되었을 때 컴퓨터의 랜덤 값이 나와야 한다는 것.
  // 그래서 play 함수 안에 randomChoice 함수를 만든다.

  const play = (userChoice) => {

    // 유저가 선택한 값
    setUserSelect(choice[userChoice]);

    // 컴퓨터의 랜덤 값
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    // 결과 값
    setResult(judgement(choice[userChoice], computerChoice));
  }

  const judgement = (user, computer) => {
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

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // Object.keys 는 객체의 키 값만 뽑아서 array로 만들어주는 함수임.
    let randomItem = Math.floor(Math.random()*itemArray.length); // 랜덤 숫자 만들기
    let final = itemArray[randomItem] ;
    return choice[final];
  }

  return (
    <div>
      <div className='gameName'>가위바위보 게임!</div>
      <div className="main">
        <Box title="YOU" item={userSelect} result={result}/>
        <Box title="COMPUTER" item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        <button className="rspButton" onClick={() => play("scissor")}>가위</button>
        <button className="rspButton" onClick={() => play("rock")}>바위</button>
        <button className="rspButton" onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
