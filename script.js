let playBtn = document.querySelector(".play-btn");
let music = document.querySelector("#bgm");

function playAudio() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
playBtn.addEventListener("click", playAudio);
