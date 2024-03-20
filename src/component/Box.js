import React from 'react'

const Box = (props) => {
  let result;
  if (props.title === "COMPUTER" && props.result != "😏TIE😏" && props.result !== "") {
    result = props.result === "👑WIN👑" ? "😭LOSE😭" : "👑WIN👑";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
        <h1 className='textSize'>{props.title}</h1>
        <img className='imgSize' src={props.item && props.item.img}/>
        <h2 className='textSize'>{result}</h2>
    </div>
  )
}

export default Box