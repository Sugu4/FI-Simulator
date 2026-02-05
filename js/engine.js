let index = 0;
const main = document.getElementById("task");

function render() {
  const t = EXAM.tasks[index];
  const saved = loadAnswer(t.id) || "";

  // NEU: Diagramm/SVG-HTML vorbereiten
  const diagramHtml = t.diagram
    ? `<img src="${t.diagram}" alt="Diagramm zur Aufgabe" style="max-width:100%;height:auto;">`
    : (t.svg ? t.svg : "");

  main.innerHTML = `
    <div class="task">
      <div class="meta">
        <span>Aufgabe ${index + 1} / ${EXAM.tasks.length}</span>
        <span>${t.points} Punkte</span>
      </div>

      <div class="operator">${t.operator}</div>
      <p>${t.context}</p>

      ${
        diagramHtml
          ? `<div style="margin: 1rem 0;">${diagramHtml}</div>`
          : ""
      }

      <p><strong>${t.question}</strong></p>

      <textarea id="answer">${saved}</textarea>

      <div class="nav">
        ${index > 0 ? `<button onclick="prev()">Zurück</button>` : ""}
        ${
          index < EXAM.tasks.length - 1
            ? `<button onclick="next()">Weiter</button>`
            : `<button class="finish" onclick="finish()">Abgeben</button>`
        }
      </div>
    </div>
  `;
}

function save() {
  const t = EXAM.tasks[index];
  saveAnswer(t.id, document.getElementById("answer").value);
}

function next() { save(); index++; render(); }
function prev() { save(); index--; render(); }

function finish() {
  save();
  window.location.href = "result.html";
}

render();
