function applyAt(cb, args, ctx, applyTime) {
  if (applyTime <= ctx.currentTime) {
    cb.apply(undefined, args);
  } else {
    requestAnimationFrame(() => applyAt(cb, args, ctx, applyTime));
  }
}

function applyAfter(cb, args, ctx, applyDelay) {
  applyAt(cb, args, ctx, ctx.currentTime + applyDelay);
}

//
// Returns an object containing functions to adjust the
// interval at which the function is applied, and a function
// to cancel the iteration.
//
function applyEvery(cb, args, ctx, applyInterval) {
  let loop = true;
  const setInterval = (n) => { applyInterval = n; };
  const cancel = () => { loop = false; };
  const looper = (...cbArgs) => {
    if (loop) {
      const nextTime = ctx.currentTime + applyInterval;
      const newArgs  = cb.apply(undefined, cbArgs);
      applyAt(looper, newArgs, ctx, nextTime);
    }
  };
  applyAt(looper, args, ctx, ctx.currentTime + applyInterval);
  return { cancel, setInterval };
}

export { applyAt, applyAfter, applyEvery };
