import {Player} from "./index";
export interface Character {
    id?: Number;
    name: String;
    variants?: Array<Player>;
}
