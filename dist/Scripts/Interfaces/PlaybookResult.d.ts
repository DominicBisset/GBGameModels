import { ResultEffect } from "../index";
export interface PlaybookResult {
    id?: Number;
    row: Number;
    col: Number;
    effects: Array<ResultEffect>;
}
