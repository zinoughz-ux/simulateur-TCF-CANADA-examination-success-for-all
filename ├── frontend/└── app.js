let timer;
let timeLeft;

document.getElementById("task").addEventListener("change", startTimer);

function startTimer() {
  clearInterval(timer);
  const task = document.getElementById("task").value;
  timeLeft = task == 1 ? 600 : task == 2 ? 1200 : 1800;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText =
      "⏱ Temps : " + Math.floor(timeLeft / 60) + ":" + (timeLeft % 60);

    if (timeLeft <= 0) clearInterval(timer);
  }, 1000);
}

async function submitText() {
  const text = document.getElementById("text").value;
  const task = document.getElementById("task").value;

  const response = await fetch("/api/correct", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ text, task })
  });

  const data = await response.json();
  document.getElementById("result").innerText = data.feedback;
}
