import React from 'react';
import {Board} from "../../molecules/board";
import {calculateWinner} from "../../../services/services";

export const BoardGame = ({board, xIsNext,winner, onClick, children}) => {

    const MAX_NUMBER_COL = 3;
    const MAX_NUMBER_ROW = 3;

    const updateCellhandlerClick = (row,col) => {
        const indexRowBoard = getPositionBoardLinear(row, col);
        const newBoard = [...board];
        if (isPaintedCell(winner, newBoard[indexRowBoard])) return;
        newBoard[indexRowBoard] = getValueCell(xIsNext);
        const newXIsNext = !xIsNext;
        const winnerGame = calculateWinner(newBoard);
        onClick(newBoard, newXIsNext,winnerGame);
    };

    const getValueCell = (xIsNext) => {
        return xIsNext ? 'X' : 'O';
    }

    const getPositionBoardLinear = (rowPostion, colPosition) => {
        return rowPostion * MAX_NUMBER_COL + colPosition;
    }
    const isPaintedCell = (winner, value) => {
        return winner || value;
    }

    return (
        <>
            {children}
            <Board board={board} numberRow={MAX_NUMBER_ROW} numberCol={MAX_NUMBER_COL} onClick={updateCellhandlerClick}/>
        </>
    );
}