'use strict';

let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.','12 p.m', '1 p.m.', '2 p.m.','3 p.m', '4 p.m.', '5 p.m.', '6 p.m', '7 p.m.'];

//create constructor function

const profileStore = document.getElementById('cityList');
let cityArray = [];
const cityTableBody = document.querySelector('tbody');

function City(name,min,max,avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  let Citytotal = 0;
  let cookiesSoldEachHourArray = [];
  this.getRandomCustomers = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.getCookieSalesPerHour = function() {
  for (let i = 0; i < hours.length; i++) {
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
  }
  };
  this.renderTheList = function() {
    this.getCookieSalesPerHour();
    let title = document.createElement('h1');
    title.textContent = this.name ;
    profileStore.appendChild(title);
  
    for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]} : ${cookiesSoldEachHourArray[i]} cookies`;
    profileStore.appendChild(li);
    Citytotal += cookiesSoldEachHourArray[i];
  }
  let li = document.createElement('li');
  li.textContent = `Total : ${Citytotal} cookies`;
  profileStore.appendChild(li);
};
cityArray.push(this);
}

new City(
  'Seattle',
  23,
  65,
  6.3
);

new City(
  'Tokyo',
  3,
  24,
  1.2
);

new City(
  'Dubai',
  11,
  38,
  3.7
);

new City(
  'Paris',
  20,
  38,
  2.3
);

new City(
  'Lima',
  2,
  16,
  4.6
);

for (let i = 0; i < cityArray.length; i++) {
cityArray[i].renderTheList();
}
