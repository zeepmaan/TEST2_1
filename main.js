const stopwatch = document.getElementById("stopwatch")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")

let timerId; //const初期値要、再代入不可だからlet？
let elapsedMs = 0;

function timeToString(millisecond) {
  const ms = millisecond % 1000;
  const s = Math.floor(millisecond / 1000) % 60;
  const m = Math.floor(millisecond / 1000 / 60) % 60;
  const h = Math.floor(millisecond / 1000 / 60 / 60);

  const formattedMs = ms.toString().slice(0, 1);
  //stopwatch.textContent = h + ":" + m + ":" + s + ":" + formattedMs ;
  //console.log(nowMs);
  return `${h}:${m}:${s}:${formattedMs}`;
}

function timeStart() {
  let startMs = Date.now(); //constだと再代入できない。
  startMs -= elapsedMs;
 
  timerId = setInterval(function() {
    const nowMs = Date.now();
    elapsedMs = nowMs - startMs;

    stopwatch.textContent = timeToString(elapsedMs);
  }, 10);

  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
}

function timeStop() {
  clearInterval(timerId);
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
}

function timeReset() {
  clearInterval(timerId);
  stopwatch.textContent ="0:0:0:0";
  elapsedMs = 0;
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
}
