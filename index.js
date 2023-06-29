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
console.log(new Date());