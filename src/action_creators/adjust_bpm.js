function changeBPM(delta) {
  return {
    type: "ADJUST_BPM",
    delta,
  };
}

export default changeBPM;
