import { Play } from './Play';
import { Zone } from '../Scripts';
export interface CharacterPlay extends Play {
    id?: Number;
    infCost: Number;
    gbCost: Number;
    rng: Number;
    zone: Zone;
    zoneSize: Number;
    sustain: Boolean;
}
