import { Ability } from './Ability';
import { Zone } from '../index';
export interface CharacterPlay extends Ability {
    id?: Number;
    infCost: Number;
    gbCost: Number;
    rng: Number;
    zone: Zone;
    zoneSize: Number;
    sustain: Boolean;
}
