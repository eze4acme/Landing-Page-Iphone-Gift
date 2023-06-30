const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const daysOfWeek = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];
const subTitleEl = document.querySelector('.sub_title')
const date = new Date()
const month = date.getMonth() 
const dayOfWeek = date.getDay()

subTitleEl.textContent = `giveaway ends on ${daysOfWeek[dayOfWeek]}, ${date.getDate()} ${months[month]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}am`
function countdown(targetDate) {
    const daysEl = document.getElementById('days')
    const hoursEl = document.getElementById('hours')
    const minsEl = document.getElementById('mins')
    const secsEl = document.getElementById('secs')

  let timer = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysEl.textContent = `${days}`
    hoursEl.textContent = `${hours}`
    minsEl.textContent = `${minutes}`
    secsEl.textContent = `${seconds}`

    if (timeRemaining < 0) {
      clearInterval(timer);
      console.log("Countdown complete!");
    }
  }, 1000);
}

const targetDate = new Date("December 31, 2023 23:59:59").getTime();
countdown(targetDate);


