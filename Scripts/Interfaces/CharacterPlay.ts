//module GBGameModels {
import {Play} from './Play'
import {Zone} from '../Scripts'
export interface CharacterPlay extends Play {
    infCost: Number;
    //gbCost null if not available
    gbCost: Number;
    rng: Number; //TODO: handle range S, P
    zone: Zone;
    zoneSize: Number;
    sustain: Boolean;
}