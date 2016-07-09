import {Character, Team, Season, PlaybookResult, Ability, Tag} from "./index";

export interface Player {
    id?: Number;
    title?: String;
    character?: Character;
    characterId: Number;
    playsFor: Array<Team>;
    seasonIntroduced?: Season;
    seasonIntroducedNo: Number;
    seasonRetired?: Season;
    seasonRetiredNo?: Number;
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
    abilities: Array<Ability>;
    tags: Array<Tag>;

    playerImageUri: String;
    modelImageUri: String;
    cardFrontImageUri: String;
    cardBackImageUri: String;
}
