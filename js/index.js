const audio = new Audio('audio/rapaz.mp3');
let xarope = 0;

function ratinho() {
    audio.play();
    xarope += 1;
    document.getElementById("xaropeJS").innerHTML = xarope;
}