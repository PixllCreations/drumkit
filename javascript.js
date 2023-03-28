function addBorder(key) {
    key.classList.add('playing');
}

function removeBorder(key) {
    key.classList.remove('playing');
}

window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[key="${e.key}"]`);
    const key = document.querySelector(`.key[key="${e.key}"]`);
    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    addBorder(key);
    setTimeout(() => removeBorder(key), 100);
});