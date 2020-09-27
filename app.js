const dayCalc = document.querySelector("#days");
const hoursCalc = document.querySelector("#hours");
const minCalc = document.querySelector("#minutes");
const secCalc = document.querySelector("#seconds");

const newYears = "1 Jan 2021";

countDown = () => {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const Totalsec = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(Totalsec / 3600 / 24);
  const hours = Math.floor(Totalsec / 3600) % 24;
  const min = Math.floor(Totalsec / 60) % 60;
  const sec = Math.floor(Totalsec % 60);

  dayCalc.innerHTML = formatTime(days);
  hoursCalc.innerHTML = formatTime(hours);
  minCalc.innerHTML = formatTime(min);
  secCalc.innerHTML = formatTime(sec);

  console.log(days, hours, min, sec);
};

formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

setInterval(countDown, 1000);

countDown();
