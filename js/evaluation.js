// js/evaluation.js

const resultMain = document.getElementById("result");

function formatMinutes(seconds) {
  if (seconds == null) return "–";
  const m = Math.floor(seconds / 60);
  return `${m} Minuten`;
}

function scoreTask(task, answer) {
  const text = (answer || "").toLowerCase().trim();
  const keywords = task.keywords || [];

  if (!text || !keywords.length || !task.points) {
    return 0;
  }

  let hits = 0;
  keywords.forEach(kw => {
    if (text.includes(kw.toLowerCase())) {
      hits++;
    }
  });

  const ratio = hits / keywords.length;
  return Math.round(ratio * task.points);
}

function classifyBlock(points, maxPoints) {
  if (!maxPoints) return "result-block";
  const p = points / maxPoints;
  if (p < 0.34) return "result-block bad";
  if (p < 0.67) return "result-block mid";
  return "result-block";
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function evaluate() {
  let html = "";
  let totalPoints = 0;
  let reachedPoints = 0;

  EXAM.tasks.forEach(task => {
    const userAnswer = (loadAnswer(task.id) || "").trim();
    const maxPoints = task.points || 0;
    totalPoints += maxPoints;

    const points = scoreTask(task, userAnswer);
    reachedPoints += points;

    const cls = classifyBlock(points, maxPoints);

    html += `
      <section class="${cls}">
        <div class="label">
          Aufgabe ${escapeHtml(task.id)} – ${points} / ${maxPoints} Punkte
        </div>
        <div class="your-answer">
          <strong>Deine Antwort:</strong><br>
          ${userAnswer
        ? escapeHtml(userAnswer).replace(/\n/g, "<br>")
        : "<em>Keine Antwort gegeben.</em>"
      }
        </div>
        <div class="solution">
          <strong>Mögliche Lösung:</strong><br>
          ${escapeHtml(task.solution)}
        </div>
      </section>
    `;
  });

  const totalPercent =
    totalPoints > 0 ? Math.round((reachedPoints / totalPoints) * 100) : 0;

  resultMain.innerHTML = `
  <h1>Auswertung</h1>
  <p>Erreichte Punkte: <strong>${reachedPoints}</strong> von <strong>${totalPoints}</strong>
     (${totalPercent} %)</p>
  <p>Verbleibende Zeit: ${formatMinutes(loadTime())}</p>

  <div class="result-actions">
    <button class="result-btn" onclick="restartExam()">Neuer Versuch</button>
    <button class="result-btn" onclick="goHome()">Zur Startseite</button>
  </div>

  ${html}
`;

}

function restartExam() {
  localStorage.removeItem("ap1_answers");
  localStorage.removeItem("ap1_time");
  window.location.href = "exam.html";
}

function goHome() {
  // hier ggf. anpassen: Name deiner Startseite
  window.location.href = "index.html";
}

evaluate();
