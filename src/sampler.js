/* globals Promise */

import "whatwg-fetch";

let files = [
  "samples/tr808/kick.mp3",
  "samples/tr808/snare.mp3",
  "samples/tr808/clap.mp3",
  "samples/tr808/closed-hat.mp3",
  "samples/tr808/open-hat.mp3",
  "samples/tr808/cowbell.mp3",
];

if (window.location.hostname !== "localhost") {
  files = files.map(path =>
    `https://raw.githubusercontent.com/lpil/stepper/master/${path}`);
}

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
        const play = () => playBuffer(ctx, data);
        const name = sampleName(path);
        return { play, path, data, name };
      }))))
  ).then(cb);
}

function playBuffer(ctx, buffer) {
  const player  = ctx.createBufferSource();
  player.buffer = buffer;
  player.connect(ctx.destination);
  player.start();
}

export { loadSamples, playBuffer };
