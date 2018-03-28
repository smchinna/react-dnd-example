/*
 * App reducer
 * This reducer handles state that must be made available to all
 * sub-components. 
 */

const initialData = {
    data : []
}

/**
 * Sets up the state of the global App
 * 
 * @param {any} [state=initialState] The shape of the initial/default state for App
 * @param {any} action Redux action affecting the state
 * @returns State object after being affected by the reducer
 */

function appReducer(state = initialData, action) {
  
  switch (action.type) {
    case 'INITIAL_DATA':
        state.data = action.payload
        return state;
    case 'UPDATE_DETAIL':
        state.data = action.payload
        return state;
    case 'REASSIGN_DETAIL':
        state.data = action.payload
        return state;
  }
  return state;
}

export default appReducer;
