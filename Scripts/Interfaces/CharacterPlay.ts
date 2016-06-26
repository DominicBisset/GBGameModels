//module GBGameModels {
import {Ability} from './Ability'
import {Zone} from '../index'
export interface CharacterPlay extends Ability {
    id?: Number;
    infCost: Number;
    //gbCost null if not available
    gbCost: Number;
    rng: Number; //TODO: handle range S, P
    zone: Zone;
    zoneSize: Number;
    sustain: Boolean;
}