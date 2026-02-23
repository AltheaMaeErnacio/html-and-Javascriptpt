function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}

function generatePalette() {
  let palette = document.getElementById("palette");
  palette.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    let color = randomColor();

    let box = document.createElement("div");
    box.className = "color-box";
    box.style.background = color;
    box.innerHTML = color;

    box.onclick = function () {
      navigator.clipboard.writeText(color);
      box.innerHTML = "Copied!";
      setTimeout(() => box.innerHTML = color, 1000);
    };

    palette.appendChild(box);
  }
}

generatePalette();