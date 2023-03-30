window.addEventListener('keydown', (e) => {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

window.addEventListener('keyup', (e) => {
    let audio_for_keyup = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key_for_keyup = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio_for_keyup) return
    key_for_keyup.classList.remove('playing');
});