export const windowResize = (width, height) => {
  return {
    type: 'WINDOW_RESIZE',
    payload: {
      screenWidth: width,
      screenHeight: height  
    }
  }
};


export const updateData = (data) => {
  return {
    type: 'UPDATE_DATA',
    payload: {
      data: data
    }
  }
};


