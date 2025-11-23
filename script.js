//your JS code here. If required.

let btn = document.getElementById("buttons");
let audio = new Audio("click.mp3");

btn.addEventListener("click",(e)=>{
	if(e.target.className == "stop"){
		
	}else{
		playSound();
	}
})

function playSound() {
    audio.currentTime = 0;
    audio.play();
}
function stopSound() {
    audio.pause();
    audio.currentTime = 0;
}
