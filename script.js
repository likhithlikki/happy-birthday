var audioPlayer = document.getElementById("audioPlayer");
var songSelect = document.getElementById("songSelect");

// Set body opacity based on password
let name = prompt("Enter your name: ");

if (name === "ushhh") {
  document.querySelector("body").style.opacity = "100%";
  alert("Thanks for confirming!");
  audioPlayer.play();
} else {
  document.querySelector("body").style.opacity = "0%";
  alert("Wrong password");
  window.location.href = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ5CTzbRKH4kXv9nGYUvs501eiHk-3jUQXQhN5kP5Tr8JoTm_xJQLbhHiRHKGahkuY4sN1s";
}



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
