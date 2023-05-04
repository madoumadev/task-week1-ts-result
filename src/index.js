/** @format */
const appBody = document.querySelector("#app__body");
const summer = document.querySelector("#w__summer");
const rainy = document.querySelector("#w__rainy");
const winter = document.querySelector("#w__winter");
const inputRange = document.querySelector("#volume");
const btnsOptions = [summer, rainy, winter];
let current_audio = document.createElement("audio");
let audio_index = 0;
let isPlaying = false;
let audio_list = [
    {
        path: "/task1/src/assets/sounds/summer.mp3",
        bgImage: "/task1/src/assets/summer-bg.jpg",
        id: "w__summer",
    },
    {
        path: "/task1/src/assets/sounds/rain.mp3",
        bgImage: "/task1/src/assets/rainy-bg.jpg",
        id: "w__rainy",
    },
    {
        path: "/task1/src/assets/sounds/winter.mp3",
        bgImage: "/task1/src/assets/winter-bg.jpg",
        id: "w__winter",
    },
];
function loadSong(audio_index) {
    current_audio.src = audio_list[audio_index].path;
    current_audio.load();
    // Update bg
    appBody.style.backgroundImage =
        "url(" + audio_list[audio_index].bgImage + ")";
}
function handleSongClick(id) {
    let index = audio_list.findIndex((audio) => audio.id === id);
    if (current_audio.paused) {
        playSong();
    }
    else {
        if (index !== -1)
            audio_index = index;
        else
            audio_index = 0;
        loadSong(audio_index);
        playSong();
    }
}
function playSong() {
    current_audio.play();
}
function pauseSong() {
    current_audio.pause();
}
//Play
btnsOptions.forEach((songBtn) => {
    songBtn.addEventListener("click", () => {
        handleSongClick(songBtn.id);
    });
});
// Pause
btnsOptions.forEach((b) => {
    b.addEventListener("dblclick", () => {
        pauseSong();
    });
});
//Volume
inputRange.addEventListener("input", (e) => {
    const value = +inputRange.value;
    current_audio.volume = value / 100;
});
//init
loadSong(audio_index);
