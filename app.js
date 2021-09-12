// getting the time to meditate
let timeToCountDown = 120;
let userSelectTime = document.querySelectorAll('.time');
userSelectTime.forEach(time => [
    time.addEventListener('click', () => {
        timeToCountDown = time.dataset.time;
        console.log(timeToCountDown);
    })
])

//play btn
let video = document.querySelector('video');
let audio = document.querySelector('audio');
let playBtn = document.querySelector('.play-btn');
let playImg = document.querySelector('.play-btn img');
console.log(playImg);
playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playImg.src = './svg/pause.png';
        audio.play();
    }
    else {
        video.pause();
        playImg.src = './svg/play.png';
        audio.pause();
    }
})

// changing the background vid and audio
let rain = document.querySelector('.rain');
let beach = document.querySelector('.beach');

beach.addEventListener('click', () => {
    if (video.src.includes('beach.mp4') === false) {
        video.src = './video/beach.mp4';
        audio.src = './sounds/beach.mp3';
        playImg.src = './svg/play.png';
        // document.querySelector('.video-container').classList.add('beach-vid');
        video.classList.add('beach-vid');
    }
})

rain.addEventListener('click', () => {
    if (video.src.includes('rain.mp4') === false) {
        video.src = './video/rain.mp4';
        audio.src = './sounds/rain.mp3';
        playImg.src = './svg/play.png';
        // document.querySelector('.video-container').classList.remove('beach-vid');
        video.classList.remove('beach-vid');
    }
})

//replay btn
let replayBtn = document.querySelector('.replay-btn');
replayBtn.addEventListener('click', () => {
    video.currentTime = '0';
    video.play();
    audio.currentTime = 0;
    audio.play();
    playImg.src = './svg/pause.png';
})