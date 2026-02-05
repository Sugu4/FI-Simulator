let remaining = loadTime() || EXAM.duration;

setInterval(() => {
  remaining--;
  saveTime(remaining);

  const m = Math.floor(remaining / 60);
  const s = remaining % 60;
  document.getElementById("timer").textContent =
    `${m}:${s.toString().padStart(2,"0")}`;

  if (remaining <= 0) finish();
}, 1000);
