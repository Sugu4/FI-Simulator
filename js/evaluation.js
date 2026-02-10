// js/evaluation.js

const resultMain = document.getElementById("result");

function formatMinutes(seconds) {
  if (seconds == null) return "–";
  const m = Math.floor(seconds / 60);
  return `${m} Minuten`;
}

function scoreTask(task, answer) {
  const text = (answer || "").toLowerCase().trim();

  // 1) Spezialfall: Reihenfolge-Aufgabe mit correctOrder
  if (task.type === "uml" && Array.isArray(task.correctOrder)) {
    // Nutzer trennt die Phasen z.B. mit Komma, Strichpunkt oder Zeilenumbruch
    const userParts = text
      .split(/[,\n;]+/)
      .map(p => p.trim().toLowerCase())
      .filter(p => p);

    const correct = task.correctOrder.map(p => p.toLowerCase());

    let hits = 0;
    // Positionstreffer zählen: was an Stelle i steht, wird mit correct[i] verglichen
    for (let i = 0; i < correct.length && i < userParts.length; i++) {
      if (userParts[i].includes(correct[i])) {
        hits++;
      }
    }

    const ratio = hits / correct.length;

    if (ratio >= 0.8) return task.points;                    // fast alles richtig
    if (ratio >= 0.5) return Math.round(task.points * 2 / 3); // ca. die Hälfte richtig
    if (ratio >= 0.2) return Math.round(task.points / 3);     // wenig richtig
    return 0;
  }

  // 2) Spezialfall: „Nenne zwei von mehreren möglichen“ (z.B. A3a)
  if (task.type === "two-of-many") {
    const keywords = (task.keywords || []).map(k => k.toLowerCase());
    if (!text || !keywords.length || !task.points) return 0;

    let hits = 0;
    keywords.forEach(kw => {
      if (text.includes(kw)) hits++;
    });

    if (hits >= 2) return task.points;                 // mind. 2 passende Gesetze → volle Punkte
    if (hits === 1) return Math.round(task.points / 2); // nur 1 → halbe Punkte
    return 0;
  }

  // 3) Standardfall: Keyword-Logik für alle anderen Aufgaben
  const keywords = (task.keywords || []).map(k => k.toLowerCase());

  if (!text || !keywords.length || !task.points) {
    return 0;
  }

  let hits = 0;
  keywords.forEach(kw => {
    if (text.includes(kw)) {
      hits++;
    }
  });

  const ratio = hits / keywords.length;

  if (hits === 0) {
    return 0;
  } else if (ratio >= 0.5) {
    // ≥50% der Keywords → volle Punkte
    return task.points;
  } else if (ratio >= 0.3) {
    // 30–59% → 2/3 der Punkte
    return Math.round(task.points * 2 / 3);
  } else {
    // Weniger als 30% → 1/3 der Punkte
    return Math.round(task.points / 3);
  }
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
  const params = new URLSearchParams(window.location.search);
  const examName = params.get("exam") || "ap1_sample";

  window.location.href = "exam.html?exam=" + encodeURIComponent(examName);
}

function goHome() {
  window.location.href = "index.html";
}

evaluate();
