//your JS code here. If required.

let btn = document.getElementById("buttons");
let audio = new Audio("/click.mp3");

btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("stop")) {
        stopSound();
    } else {
        playSound();
    }
});

function playSound() {
    audio.currentTime = 0;
    audio.play().catch(()=>{});   
}

function stopSound() {
    audio.pause();
    audio.currentTime = 0;
}
