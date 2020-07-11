export const windowResize = (width, height) => {
  return {
    type: 'WINDOW_RESIZE',
    payload: {
      screenWidth: width,
      screenHeight: height  
    }
  }
};

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


