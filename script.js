const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const msg = document.getElementById("message");
const heart = document.querySelector(".heart");
const sound = document.getElementById("sound");

const colors = [
  "#ff1744", // red
  "#ff9800", // orange
  "#ffeb3b", // yellow
  "#4caf50", // green
  "#2196f3", // blue
  "#9c27b0", // purple
  "#e91e63"  // pink
];

// 🧡 No button random move on hover
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth * 0.6;
  const y = Math.random() * window.innerHeight * 0.6;
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// ❤️ YES button clicked
yesBtn.addEventListener("click", () => {
  heart.style.animation = "none";
  heart.style.transform = "rotate(-45deg) scale(1.5)";
  heart.style.boxShadow = "0 0 80px #ff1744";
  msg.textContent = "I love you ❤️";
  msg.style.opacity = 1;
  sound.play();

  setTimeout(() => {
    heart.style.animation = "pulse 1.5s infinite ease-in-out";
  }, 2000);
});

// 💔 NO button clicked (change heart color randomly)
noBtn.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  heart.style.background = randomColor;
  heart.style.boxShadow = `0 0 50px ${randomColor}`;
  heart.style.setProperty("--heart-color", randomColor);
  heart.style.animation = "pulse 1s infinite ease-in-out";

  msg.textContent = "Do you love me? 💔";
  msg.style.opacity = 1;
});
