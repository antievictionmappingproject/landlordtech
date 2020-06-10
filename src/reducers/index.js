import { INITIAL_STATE } from '../constants/defaults';


var reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'WINDOW_RESIZE':
      return {
        ...state,
        screenWidth: action.payload.screenWidth,
        screenHeight: action.payload.screenHeight
      };
    default:
      return state;
  }
};

export default reducer;