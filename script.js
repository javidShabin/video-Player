let playBtn = document.getElementById("play-btn");
let video = document.querySelector(".video");
let progressBar = document.querySelector(".progress-bar")
let progressRange = document.querySelector(".progress-range");

let isVideoPlaying = false;

// Video play or pause
const playOrPuseVideo = () => {
    if (!isVideoPlaying) {
        video.play()
        isVideoPlaying = true;
        playBtn.classList.replace("fa-play", "fa-pause");
    }else {
        video.pause()
        isVideoPlaying = false;
        playBtn.classList.replace("fa-pause", "fa-play");
    }
}

// Update progressbar
const updateProgressbar = (event) => {
    let currentTime = event.target.currentTime;
    let duration = event.target.duration;
    progressBar.style.cssText = `
        width: ${(currentTime / duration) * 100}%
    `
}

// Update Seekbar
const updateSeekbar = (event) => {
    let currentPoint = event.offsetX;
    let progressbarWidth = event.target.clientWidth
    let currentRange = (currentPoint / progressbarWidth) * video.duration;
    video.currentTime = currentRange;
}

playBtn.addEventListener("click", playOrPuseVideo);
video.addEventListener("click", playOrPuseVideo);
video.addEventListener("timeupdate", updateProgressbar)
progressRange.addEventListener("click", updateSeekbar)