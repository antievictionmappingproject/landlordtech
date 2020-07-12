export const windowResize = (width, height) => {
  return {
    type: 'WINDOW_RESIZE',
    payload: {
      screenWidth: width,
      screenHeight: height  
    }
  }
};

export const changeMapLoaded = (mapLoaded) => {
  return {
    type: "CHANGE_MAP_LOADED",
    payload: {
      mapLoaded: mapLoaded
    }
  }
}


export const changeCurrentResponseID = (currentResponseID) => {
  return {
    type: "CHANGE_CURRENT_RESPONSE_ID",
    payload: {
      currentResponseID: currentResponseID
    }
  }
}

export const changeIsFullScreen = (isFullScreen) => {
  return {
    type: "CHANGE_IS_FULL_SCREEN",
    payload: {
      isFullScreen: isFullScreen
    } 
  }
}
export const changeCurrentNomenclature = (currentNomenclature) => {
  return {
    type: "CHANGE_CURRENT_NOMENCLATURE",
    payload: {
      currentNomenclature: currentNomenclature
    }
  }
}


export const changeCurrentTechType = (currentTechType) => {
  return {
    type: "CHANGE_CURRENT_TECH_TYPE",
    payload: {
      currentTechType: currentTechType
    }
  }
}


export const updateData = (data) => {
  return {
    type: 'UPDATE_DATA',
    payload: {
      data: data
    }
  }
};


