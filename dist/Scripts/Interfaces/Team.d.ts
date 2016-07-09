import { Season } from './Season';
export interface Team {
    id?: Number;
    name: String;
    seasonIntroduced?: Season;
    seasonIntroducedNo: Number;
    logoImageUri: String;
}
