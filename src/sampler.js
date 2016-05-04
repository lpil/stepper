/* globals Promise */

import "whatwg-fetch";

const files = [
  "samples/tr808/clap.mp3",
  "samples/tr808/closed-hat.mp3",
  "samples/tr808/cowbell.mp3",
  "samples/tr808/kick.mp3",
  "samples/tr808/open-hat.mp3",
  "samples/tr808/snare.mp3",
];

function sampleName(path) {
  const segments = path.split("/");
  const filename = segments[segments.length - 1];
  return filename.split(".")[0];
}

function loadSamples(ctx, cb) {
  if (!ctx && !cb) {
    throw "argument error: AudioContext and callback required";
  }
  Promise.all(
    files
      .map(path  => fetch(path)
      .then(res  => res.arrayBuffer()
      .then(arr  => ctx.decodeAudioData(arr)
      .then(data => {
        const name = sampleName(path);
        return { path, data, name };
      }))))
  ).then(cb);
}

function play(ctx, buffer) {
  const player  = ctx.createBufferSource();
  player.buffer = buffer;
  player.connect(ctx.destination);
  player.start();
}

export { loadSamples, play };
