const initialState = 130;

function subject(state = initialState, action = undefined) {
  switch (action.type) {
    case "ADJUST_BPM":
      return Math.max(state + action.delta, 0);

    default:
      return state;
  }
}

export default subject;
