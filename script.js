const viewIcon = [document.getElementById("view-icon"), document.getElementById("view-icon-1")];
function toggleTheme(icon) {
    document.body.classList.toggle("dark-theme");
    const isDarkTheme = document.body.classList.contains("dark-theme");

    icon.setAttribute("src", isDarkTheme ? "./assets/sun.png" : "./assets/moon.png");

    if (sentence.classList.contains("hidden")) {
        // Show the sentence
        sentence.textContent = "This dark is my life without you";
        sentence.classList.remove("hidden");
      } else {
        // Hide the sentence
        sentence.classList.add("hidden");
      }
}

viewIcon.forEach(icon => {
    icon.onclick = function () {
        toggleTheme(icon);
    };
});
