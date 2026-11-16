const clock = document.getElementById("clock");
const dateLine = document.getElementById("date");
function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
  dateLine.textContent = now.toLocaleDateString(undefined, {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });
}
updateClock();
setInterval(updateClock, 1000);