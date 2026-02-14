const player = document.getElementById("toggle-play");
let song = new Audio("/assets/audio/song.mp3");
song.play();

player.addEventListener("change", play);
song.addEventListener("ended", togglePlayButton);

function play() {
    if (player.checked) {
        song.play();
    } else {
        song.pause();
    }
}

function togglePlayButton() {
    player.checked = false;
}
