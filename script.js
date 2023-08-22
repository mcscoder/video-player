const playPauseBtn = document.querySelector(".play-pause-btn");
const videoContainer = document.querySelector(".video-container");
const video = document.querySelector("video");

playPauseBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

document.addEventListener("keydown", (e) => {
  switch (e.key.toLowerCase()) {
    case " ":
    case "k":
      togglePlay();
      break;
    case "f":
      video.requestFullscreen();
  }
});

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

video.addEventListener("play", () => {
  videoContainer.classList.remove("paused");
});

video.addEventListener("pause", () => {
  videoContainer.classList.add("paused");
});
