const form = document.getElementById("training-form");
const list = document.getElementById("record-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const exercise = document.getElementById("exercise").value;
  const weight = document.getElementById("weight").value;
  const reps = document.getElementById("reps").value;
  const sets = document.getElementById("sets").value;

  const record = `${exercise}: ${weight}kg × ${reps} reps × ${sets} sets`;
  const li = document.createElement("li");
  li.textContent = record;
  list.appendChild(li);

  // 儲存到 localStorage
  const records = JSON.parse(localStorage.getItem("trainingRecords") || "[]");
  records.push(record);
  localStorage.setItem("trainingRecords", JSON.stringify(records));

  form.reset();
});

// 載入既有紀錄
window.onload = () => {
  const records = JSON.parse(localStorage.getItem("trainingRecords") || "[]");
  records.forEach((record) => {
    const li = document.createElement("li");
    li.textContent = record;
    list.appendChild(li);
  });
};

