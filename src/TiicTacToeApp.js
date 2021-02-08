import React from 'react';
import {GamePage} from "./components/pages/game";

export const TicTacToeApp = () => {
    return(
        <div className="container">
            <h1>TicTacToeApp</h1>
            <GamePage />
        </div>
    )
}