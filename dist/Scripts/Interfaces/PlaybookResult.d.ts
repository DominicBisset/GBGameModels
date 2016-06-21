import { ResultType } from "../Scripts";
export interface PlaybookResult {
    id?: Number;
    row: Number;
    col: Number;
    resultType: ResultType;
    magnitude: Number;
}
