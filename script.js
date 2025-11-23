let buttons = document.querySelectorAll(".btn");
let stopBtn = document.querySelector(".stop");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let sound = btn.dataset.sound;
        stopAll();

        let audio = document.getElementById(sound);
        audio.currentTime = 0;
        audio.play();
    });
});

stopBtn.addEventListener("click", stopAll);

function stopAll() {
    document.querySelectorAll("audio").forEach(a => {
        a.pause();
        a.currentTime = 0;
    });
}
