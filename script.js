let playBtn = document.getElementById("play-btn");
let video = document.querySelector(".video");
let videoBtn = document.getElementById("play-btn");

let isVideoPlaying = false;

const playOrPuseVideo = () => {
    if (!isVideoPlaying) {
        video.play()
        isVideoPlaying = true;

    }else {
        video.pause()
        isVideoPlaying = false;
    }
}

playBtn.addEventListener("click", playOrPuseVideo);
video.addEventListener("click", playOrPuseVideo)