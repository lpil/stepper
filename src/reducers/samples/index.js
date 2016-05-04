function samples(state = [], action = undefined) {
  switch (action.type) {
    case "SAMPLES_LOADED":
      return action.samples;

    default:
      return state;
  }
}

export default samples;
