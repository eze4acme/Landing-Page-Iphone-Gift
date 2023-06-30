const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const daysOfWeek = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

const dayOfWeek = new Date().getDay()
const month = new Date().getMonth()
console.log(daysOfWeek[dayOfWeek]);
console.log(months[month]);
console.log(new Date().getDate());
console.log(new Date().getFullYear());

console.log( Math.floor((new Date().getTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
console.log( Math.floor((new Date().getTime() % (1000 * 60 * 60)) / (1000 * 60 )));


console.log(new Date().getTime());
const hours = new Date().getHours();
const mins = new Date().getMinutes() 
console.log(mins);
console.log(hours);
