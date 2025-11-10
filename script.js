document.getElementById("infoBtn").addEventListener("click", function() {
  const info = document.getElementById("extraInfo");
  if (info.classList.contains("hidden")) {
    info.classList.remove("hidden");
    this.textContent = "❌ Hide Info";
  } else {
    info.classList.add("hidden");
    this.textContent = "✨ More About Me";
  }
});