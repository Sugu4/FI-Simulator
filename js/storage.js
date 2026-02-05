const KEY_ANSWERS = "ap1_answers";
const KEY_TIME = "ap1_time";

function loadAnswer(id) {
  const data = JSON.parse(localStorage.getItem(KEY_ANSWERS) || "{}");
  return data[id] || "";
}

function saveAnswer(id, value) {
  const data = JSON.parse(localStorage.getItem(KEY_ANSWERS) || "{}");
  data[id] = value;
  localStorage.setItem(KEY_ANSWERS, JSON.stringify(data));
}

function saveTime(seconds) {
  localStorage.setItem(KEY_TIME, seconds);
}

function loadTime() {
  return Number(localStorage.getItem(KEY_TIME)) || null;
}
