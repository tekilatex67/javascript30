window.addEventListener('keydown', function(e) {
    let sound = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();

    let key = this.document.querySelector(`.case[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
});

let keys = this.document.querySelectorAll(".case");

function removeClass() {
    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeClass));