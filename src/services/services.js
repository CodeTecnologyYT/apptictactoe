export const calculateWinner = (board) => {
    let winningPlays = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let winingPlay of winningPlays) {
        let [firstPosition, secondPosition, thirdPosition] = winingPlay;
        if (board[firstPosition] && board[firstPosition] === board[secondPosition] && board[firstPosition] === board[thirdPosition]) {
            return board[firstPosition];
        }
    }
    return null;
}