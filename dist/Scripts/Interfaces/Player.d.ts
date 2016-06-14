import { Character, Team, Season, PlaybookResult, Play, Tag } from "./Interfaces";
export interface Player {
    id: Number;
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
    icySpongeLevels: Array<Number>;
    playbook: Array<PlaybookResult>;
    plays: Array<Play>;
    tags: Array<Tag>;
}
