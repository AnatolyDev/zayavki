import { ADDUNIT, DELUNIT } from '../constants';

export function addUnit(unit) {
    return {
        type : ADDUNIT,
        payload : unit
    }
}

export function delUnit(unit) {
    return {
        type : DELUNIT,
        payload : unit
    }
}