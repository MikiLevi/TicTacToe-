export interface HistoryGame {
    playerOne: string;
    playerTwo: string;
    statusGame: GameStatus,
}
export enum GameStatus {
    plyerOne,
    plyerTwo,
    Even,
};