function loaded(state = false, action = undefined) {
  switch (action.type) {
    case "SAMPLES_LOADED":
      return true;

    default:
      return state;
  }
}

export default loaded;
