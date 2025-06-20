let score = 0;
let timeLeft = 10;
let timer;
let isPlaying = false;

const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const clickBtn = document.getElementById("clickBtn");
const startBtn = document.getElementById("startBtn");

clickBtn.disabled = true;

clickBtn.addEventListener("click", () => {
  if (!isPlaying) return;
  score++;
  scoreDisplay.textContent = score;
});

startBtn.addEventListener("click", () => {
  score = 0;
  timeLeft = 10;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  isPlaying = true;
  clickBtn.disabled = false;

  timer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      clickBtn.disabled = true;
      isPlaying = false;
      alert(`Hết giờ! Bạn đạt ${score} điểm.`);
    }
  }, 1000);
});
