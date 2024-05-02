var audioPlayer = document.getElementById("audioPlayer");
var songSelect = document.getElementById("songSelect");

// Set body opacity based on password




audioPlayer.addEventListener("ended", function() {
    playNextSong();
});

var songs = ["wannabe yours.mp3", "infinity_slowed.mp3", "nethone.mp3", "padi padileche manasu.mp3"];
var currentIndex = 0; // Keep track of the current song index

function playNextSong() {
    currentIndex++;
    if (currentIndex >= songs.length) {
        currentIndex = 0;
    }
    audioPlayer.src = songs[currentIndex];
    audioPlayer.play();
}

function changeImage() {
  var image = document.getElementById('image');
  var resolution = document.getElementById('resolution').value;
  image.src = resolution;
}
