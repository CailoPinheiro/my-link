function toggleTheme() {
  var theme = document.getElementById("theme");
  if (theme.getAttribute("href") == "css/main.css") {
    theme.href = "css/light.css";
  } else {
    theme.href = "css/main.css";
  }
}