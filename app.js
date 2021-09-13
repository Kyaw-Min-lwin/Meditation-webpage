// the video n audio that are gonna play
let video = document.querySelector("video");
let audio = document.querySelector("audio");

// the p tag the will display the time left n countdown
let timeLeftDisplay = document.querySelector(".time-left");

// getting the time to meditate
let timeToCountDown = 120, copyOfTime;
let isPaused = true;
let userSelectTime = document.querySelectorAll(".time");
userSelectTime.forEach((time) => [
	time.addEventListener("click", () => {
		timeToCountDown = time.dataset.time;
		copyOfTime = timeToCountDown;
		timeLeftDisplay.textContent = getTime(timeToCountDown);
	}),
]);

//play btn 
let playBtn = document.querySelector(".play-btn");
let playImg = document.querySelector(".play-btn img");
playBtn.addEventListener("click", () => {
	if (video.paused && timeToCountDown > 0) {
		if (timeToCountDown <= 0) {
			timeToCountDown = 120;
			countDown();
		}
		isPaused = false;
		playVideo();
	} else {
		isPaused = true;
		stopVideo();
	}
});

// changing the background vid and audio
let rain = document.querySelector(".rain");
let beach = document.querySelector(".beach");

beach.addEventListener("click", () => {
	if (video.src.includes("beach.mp4") === false) {
		video.src = "./video/beach.mp4";
		audio.src = "./sounds/beach.mp3";
		playImg.src = "./svg/play.png";
		isPaused = true;
		darken();
	}
});

rain.addEventListener("click", () => {
	if (video.src.includes("rain.mp4") === false) {
		video.src = "./video/rain.mp4";
		audio.src = "./sounds/rain.mp3";
		playImg.src = "./svg/play.png";
		isPaused = true;
		darken();
	}
});

function darken() {
	document.querySelectorAll(".time").forEach((time) => {
		time.classList.toggle("darken");
	});
}

//countdown
function countDown() {
	let intervalId = setInterval(function () {
		if (isPaused === false) {
			timeLeftDisplay.textContent = getTime(timeToCountDown);
			timeToCountDown -= 1;
			if (timeToCountDown < 0) {
				stopVideo();
				clearInterval(intervalId);
				timeToCountDown = 120;
				countDown();
				isPaused = true;
			}
		}
	}, 1000);
}

//
function stopVideo() {
	video.pause();
	audio.pause();
	playImg.src = "./svg/play.png";
}

function playVideo() {
	playImg.src = "./svg/pause.png";
	video.play();
	audio.play();
}
//replay btn 
let replayBtn = document.querySelector(".replay-btn");
replayBtn.addEventListener("click", () => {
	video.currentTime = 0;
	audio.currentTime = 0;
	playVideo();
	isPaused = false;
	if (timeToCountDown < 0) {
		timeToCountDown = 120;
		timeLeftDisplay.textContent = getTime(timeToCountDown);
		countDown();
	}
	else {
		timeToCountDown = copyOfTime;
	}

});

// returns padded minutes:seconds
function getTime(time) {
	let pad = function (a) {
		a = a + "";
		return a.length === 2 ? a : "0" + a;
	};
	let minutes = Math.floor(time / 60);
	let seconds = Math.floor(time % 60);
	return `${pad(minutes)}:${pad(seconds)}`;
}


countDown();