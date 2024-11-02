const viewIcon = [document.getElementById("view-icon"), document.getElementById("view-icon-1")];
function toggleTheme(icon) {
    document.body.classList.toggle("dark-theme");
    const isDarkTheme = document.body.classList.contains("dark-theme");
    const audioPlayer = document.getElementById("audioPlayer");
    const sentence = document.getElementById("sentence");
    icon.setAttribute("src", isDarkTheme ? "./assets/sun.png" : "./assets/moon.png");

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

viewIcon.forEach(icon => {
    icon.onclick = function () {
        toggleTheme(icon);
    };
});

