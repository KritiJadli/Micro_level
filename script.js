console.log("Welcome to Spotify");

// Initializations
let songIndex = 0;
let audioElement = new Audio('song');
let masterPlay = document.getElementById('masterplay');
let myProgressbar = document.getElementById('myProgressBar');

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime === 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
    }
});

// Update progress bar as song plays
audioElement.addEventListener('timeupdate', () => {
    // Calculate progress percentage
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressbar.value = progress;
});


