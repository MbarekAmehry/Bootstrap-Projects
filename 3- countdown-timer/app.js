const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.getElementById("deadline"); // dealine statement

const giveaway = document.getElementById("giveaway"); // countdown timer parent
const cardDark = document.querySelectorAll(".cardDark h2");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 10, 30, 0);

let weekDay = weekdays[futureDate.getDay()];
const dayNum = futureDate.getDate();
let month = months[futureDate.getMonth()];
const years = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// Inserting the date in the DOM
deadline.textContent = `Giveaway Ends On ${weekDay}, ${dayNum} ${month} ${years} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const today = new Date().getTime();
  let t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const mins = Math.floor((t % oneHour) / oneMinute);
  const secs = Math.floor((t % oneMinute) / 1000);

  let values = [days, hours, mins, secs];
  cardDark.forEach((item, index) => {
    item.innerHTML = values[index];
  });

  if (t < 0) {
    clearInterval(countdown);
    giveaway.innerHTML = `<h3 class="expired">Sorry this giveaway has expired</h3>
     `;
  }
};

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
