document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    video.play();
    this.style.display = 'none'; // Dölj play-knappen när videon startar
});