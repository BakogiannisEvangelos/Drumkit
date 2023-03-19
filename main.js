import "./style.scss";

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // Stop function from running at all
  audio.currentTime = 0; //rewind to start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if it's not transformed
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
window.addEventListener("keydown", playSound);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
