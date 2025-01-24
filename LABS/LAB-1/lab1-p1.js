const _ = require("lodash");

const holidays = [
  { name: "Christmas", date: new Date("2025-12-25") },
  { name: "Canada Day", date: new Date("2025-07-01") },
  { name: "April Fools", date: new Date("2025-04-01") },
];

let today = new Date();
holidays.forEach((holiday) => {
  let dateDiff = holiday.date - today;
  let days = Math.ceil(dateDiff / (1000 * 60 * 60 * 24));
  console.log(days);
});

console.log(_.sample(holidays));
console.log(_.findIndex(holidays, { name: "Christmas" }));
