import { Character, Team, Season, PlaybookResult, Play, Tag } from "./index";
export interface Player {
    id?: Number;
    character: Character;
    playsFor: Array<Team>;
    validFor: Array<Season>;
    movJog: Number;
    movRun: Number;
    TAC: Number;
    kickDice: Number;
    kickDistance: Number;
    def: Number;
    arm: Number;
    infGenerated: Number;
    infMax: Number;
    health: Number;
    baseSize: Number;
    meleeZone: Number;
    icySpongeLevels: Array<Number>;
    playbook: Array<PlaybookResult>;
    plays: Array<Play>;
    tags: Array<Tag>;
}
