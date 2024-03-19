// UI를 바꾸게 하고 싶다면 state를 만들어야 함.
import {useState} from "react";
import './App.css';
import Box from './component/Box';

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

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  }

  return (
    <div>
      <div className='main'>가위바위보 게임!</div>
      <div className="main">
        <Box title="YOU" item={userSelect}/>
        {/* <Box title="COMPUTER"/> */}
      </div>
      <div className='main'>
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
