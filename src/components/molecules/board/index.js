import React from 'react';
import {Button} from "../../atoms/button";

export const Board = ({board, numberCol, numberRow, onClick}) => {

    const handlerClick = (row,col) => {
        onClick(row, col);
    }

    const painterBoard = (board,numberCol, numberRow) => {
        let rowBoard = [];
        for (let row = 0; row < numberRow; row++) {
            let colBoard = [];
            for (let col = 0; col < numberCol; col++) {
                const rowArray = row * numberCol + col;
                colBoard= [...colBoard,<Button className={'row-board cell'} key={ rowArray } onClick={()=>handlerClick(row,col)}>{board[rowArray]}</Button>];
            }
            rowBoard= [...rowBoard,<div className='row-board d-flex' key={"row"+row}>{colBoard}</div>];
        }
        return rowBoard;
    }

    return (
        <div className='board'>
            {painterBoard(board,numberCol,numberRow)}
        </div>
    )
}