import React,{useState} from 'react';
import {BoardGame} from '../../organisms/boardGame'
import {TimeLine} from "../../organisms/timeline";
import {calculateWinner} from "../../../services/services";

export const GamePage = () => {

    const [game,setGame] = useState({
        history : [ { board : Array(9).fill(null)}],
        xIsNext : true,
        winner  : null
    });

    const getBoardCurrent= () =>{
        return game.history[game.history.length-1].board;
    }

    const boardHandlerClick = (newBoard,newXIsNext,winner) =>{
        console.log(newBoard);
        const newHistories=[...game.history, {board : newBoard}];
        setGame({
            history : newHistories,
            xIsNext : newXIsNext,
            winner : winner
        });
    };
    const TimeLimeHandlerClick = (index)=>{
        console.log("index"+index);
        const newHistories = game.history.slice( 0, index + 1);
        console.log("newHistories",newHistories);
        setGame((game)=>({
            history : newHistories,
            xIsNext : index%2 == 0,
            winner  : calculateWinner(game.history[index].board)
        }));
    }

    console.log("game",game);
    const histories = game.history;
    console.log("history",histories);
    const boardCurrent = getBoardCurrent();
    console.log("boardCurrent",boardCurrent);
    const xIsNext = game.xIsNext;
    const winner = game.winner;
    let status = "";
    if(winner){
        status = 'Winner ' + winner;
    }else{
        status =  "Next Game is "+ ( !xIsNext ?'X':'O');
    }

    return(
        <div className="game row">
            <div className="game-board col-5">
                <BoardGame board={boardCurrent} xIsNext = {xIsNext} onClick={boardHandlerClick} winner={winner}>
                </BoardGame>
            </div>
            <div className="game-info col-6">
                {status}
                <TimeLine histories={histories} onClick={TimeLimeHandlerClick}>
                </TimeLine>
            </div>
        </div>
    )
}