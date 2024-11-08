const viewIcon = document.getElementById("view-icon");
viewIcon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    const isDarkTheme = document.body.classList.contains("dark-theme");

    const viewIcon = document.getElementById("view-icon");
    const audioPlayer = document.getElementById("audioPlayer");
    const sentence = document.getElementById("sentence");
    const catImage = document.getElementById("cat");

    viewIcon.setAttribute("src", isDarkTheme ? "./assets/sun.png" : "./assets/moon.png");
    catImage.setAttribute("src", isDarkTheme ? "./assets/Sad-Cat-Memes-Transparent-Background.png" : "./assets/happy-cat.webp")

    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }

    if (sentence.classList.contains("hidden")) {
        sentence.textContent = "This dark is my life without you";
        sentence.classList.remove("hidden");
      } else {
        sentence.classList.add("hidden");
      }
}

