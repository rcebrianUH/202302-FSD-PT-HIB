const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const counter = document.getElementById("counter");
const seg = document.getElementById("seg");
const mil = document.getElementById("mil");

let countSeg = 0;
let countMil = 0;
let intervalId;
let intervalIdMil;

startBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    countSeg++;
    countMil = 0;
    seg.textContent = countSeg;
  }, 1000);
});

startBtn.addEventListener("click", () => {
  intervalIdMil = setInterval(() => {
    countMil++;
    mil.textContent = countMil.toString().padStart(2, "0");
  }, 10);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  clearInterval(intervalIdMil);
});

resetBtn.addEventListener("click", () => {
  countSeg = 0;
  seg.textContent = countSeg;
});
