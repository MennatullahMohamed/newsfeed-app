import { THEME_CHANGE } from './actions';
const initialState = {
    mode: 'light'
};

const themeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case THEME_CHANGE:
            return {
                ...state,
                mode: action.payload
            }
        default:
            return state;
    }
}

export default themeReducer;