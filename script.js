let playBtn = document.getElementById("play-btn");
let video = document.querySelector(".video");

let isVideoPlaying = false;

const playOrPuseVideo = () => {
    if (!isVideoPlaying) {
        video.play()
        isVideoPlaying = true;
        playBtn.classList.replace("fa-play", "fa-pause");
    }else {
        video.pause()
        isVideoPlaying = false;
        playBtn.classList.replace("fa-pause", "fa-play")
    }
}

playBtn.addEventListener("click", playOrPuseVideo);
video.addEventListener("click", playOrPuseVideo)