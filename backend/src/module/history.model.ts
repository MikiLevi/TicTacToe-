export interface HistoryGame {
    plyerOne: string;
    plyerTwo: string;
    statusGame: GameStatus,
}
export enum GameStatus {
    plyerOne,
    plyerTwo,
    Even,
};