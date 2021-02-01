const secondsEl = document.getElementById("seconds");
const tensEl = document.getElementById("tens");
const btnStart = document.getElementById("button-start");
const btnLap = document.getElementById("button-lap");
const btnStop = document.getElementById("button-stop");
const btnReset = document.getElementById("button-reset");
const laps = document.getElementById("laps");

let lapCount = 0;
let secs = 00;
let tens = 00;
let interval;

// Function to create & display the timer
const startTimer = function () {
  tens++;

  if (tens > 99) {
    secs++;
    tens = 00;
  }
  secondsEl.innerHTML = `${String(secs).padStart(2, "0")}`;
  tensEl.innerHTML = `${String(tens).padStart(2, "0")}`;
};

// Main stopwatch function
const stopwatch = function () {
  // Start the timer
  btnStart.addEventListener("click", function () {
    clearInterval(interval);

    interval = setInterval(startTimer, 10);
  });

  // Lap the time
  btnLap.addEventListener("click", function () {
    lapCount++;
    const lapTime = `${secondsEl.innerHTML}:${tensEl.innerHTML} - Lap ${lapCount}`;
    const lap = document.createElement("li");
    lap.innerHTML = lapTime;
    laps.append(lap);
  });

  // Stop the ongoing timer
  btnStop.addEventListener("click", function () {
    clearInterval(interval);
  });

  // Reset the timer
  btnReset.addEventListener("click", function () {
    clearInterval(interval);
    secs = 00;
    tens = 00;
    lapCount = 0;

    secondsEl.innerHTML = `${String(secs).padStart(2, "0")}`;
    tensEl.innerHTML = `${String(tens).padStart(2, "0")}`;
    laps.innerHTML = "";
  });
};

// Immediately execute the stopwatch when page loads
window.onload = stopwatch();
