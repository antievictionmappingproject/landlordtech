import { INITIAL_STATE } from '../constants/defaults';


var reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'WINDOW_RESIZE':
      return {
        ...state,
        screenWidth: action.payload.screenWidth,
        screenHeight: action.payload.screenHeight
      };
    case "CHANGE_MAP_LOADED":
      return {
        ...state,
        mapLoaded: action.payload.mapLoaded
      }
    case "CHANGE_CURRENT_RESPONSE_ID":
      return {
        ...state,
        currentResponseID: action.payload.currentResponseID
      };
    case "CHANGE_IS_FULL_SCREEN":
      return {
        ...state,
        isFullScreen: action.payload.isFullScreen
      }
  
    case "CHANGE_CURRENT_NOMENCLATURE":
      return {
        ...state,
        currentNomenclature: action.payload.currentNomenclature
      };
    case "CHANGE_CURRENT_TECH_TYPE":
      return {
        ...state,
        currentTechType: action.payload.currentTechType
      }
    case 'UPDATE_DATA':
      return {
        ...state,
        data: action.payload.data
      };
    default:
      return state;
  }
};

export default reducer;