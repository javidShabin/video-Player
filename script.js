let playBtn = document.getElementById("play-btn");
let video = document.querySelector(".video");
let progressBar = document.querySelector(".progress-bar")
console.log(progressBar);

let isVideoPlaying = false;

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

const updateProgressbar = (event) => {
    let currentTime = event.target.currentTime;
    let duration = event.target.duration;
    progressBar.style.cssText = `
        width: ${(currentTime / duration) * 100}%
    `
}

playBtn.addEventListener("click", playOrPuseVideo);
video.addEventListener("click", playOrPuseVideo);
video.addEventListener("timeupdate", updateProgressbar)