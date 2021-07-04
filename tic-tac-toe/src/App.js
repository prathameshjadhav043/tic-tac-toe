import './App.css';
import { SquareComponents } from './SquareComponents'
import React, { useState,useEffect } from 'react'

const initialState = ["","","","","","","",""] ;

function App() {
  const [gameState, setGameState] = useState(initialState);

  const [isXChance, setIsXChance] = useState(false);

  const onSquareClicked = (index) => {
    let string = Array.from(gameState) ;
    string[index] = isXChance?"X" : "O" ;
    setGameState(string);
    setIsXChance(!isXChance);
  }
  const clearGame = () => {
    setGameState(initialState);
  }
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      clearGame();
      alert(`Ta da ! ${winner} won the Game !`)
  }
  }, [gameState])

  const checkWinner = () => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Tic-Tac-Toy</h1>
        <div className="row jc-center">
          <SquareComponents className="b-bottom-right" state={gameState[0]} onClick={()=>onSquareClicked(0)}/>
          <SquareComponents className="b-bottom-right" state={gameState[1]} onClick={()=>onSquareClicked(1)}/>
          <SquareComponents className="b-bottom" state={gameState[2]} onClick={()=>onSquareClicked(2)}/>
        </div>
        <div className="row jc-center">
          <SquareComponents className="b-bottom-right" state={gameState[3]} onClick={()=>onSquareClicked(3)}/>
          <SquareComponents className="b-bottom-right" state={gameState[4]} onClick={()=>onSquareClicked(4)}/>
          <SquareComponents className="b-bottom" state={gameState[5]} onClick={()=>onSquareClicked(5)}/>
        </div>
        <div className="row jc-center">
          <SquareComponents className="b-right" state={gameState[6]} onClick={()=>onSquareClicked(6)}/> 
          <SquareComponents className="b-right" state={gameState[7]} onClick={()=>onSquareClicked(7)}/> 
          <SquareComponents className="b" state={gameState[8]} onClick={()=>onSquareClicked(8)}/> 
        </div>
        <br />
        <button className="clear-button" onClick={()=>{setGameState(initialState)}}>Clear All</button>
        <p>Developer : Prathamesh Jadhav</p>
      </div>
    </div>
  );
}

export default App;
