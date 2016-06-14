import { ResultType } from "../Scripts";
export interface PlaybookResult {
    row: Number;
    col: Number;
    resultType: ResultType;
    magnitude: Number;
}
