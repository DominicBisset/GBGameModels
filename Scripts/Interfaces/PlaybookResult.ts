import {ResultType} from "../index";
export interface PlaybookResult {
    id?: Number;
    row: Number;
    col: Number;
    resultType: ResultType;
    magnitude: Number;

}