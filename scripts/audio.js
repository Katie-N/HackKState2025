let audio = new Audio('./audio/1 star review.m4a');

document.body.addEventListener("click", function () {
    
    audio.loop = true;
    audio.play();
})
