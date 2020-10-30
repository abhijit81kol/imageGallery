import * as actionTypes from './actions';

const initialState = {
    galleryData: []
};

const Reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.INITIAL_LOADING: 
        return {
            galleryData: action.dataObject
        };
        default:
            return state;
    }
};

export default Reducer;