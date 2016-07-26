const initialState = 0;

function bpm(state = initialState, action = undefined) {
  switch (action.type) {
    case "INC_STEP":
      return state + 1;

    default:
      return state;
  }
}

export default bpm;
