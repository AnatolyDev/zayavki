import { ADDUNIT, DELUNIT } from '../constants';

const unitReducer = (state = [], action) => {
    switch (action.type) {
        case ADDUNIT:
            return [...state, action.payload];
        
        case DELUNIT:
            return state.filter(
                unit => unit.id != action.payload.id
            );

        default:
            return state;
    }
}

export default unitReducer;