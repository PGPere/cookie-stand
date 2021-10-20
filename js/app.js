'use strict';

let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.','12 p.m', '1 p.m.', '2 p.m.','3 p.m', '4 p.m.', '5 p.m.', '6 p.m', '7 p.m.'];

//create constructor function

const profileStore = document.getElementById('cityList');

const cityTableBody = document.querySelector('tbody');

let cityArray = [];
// let cookiesSoldEachHourArray = [];
function City(name,min,max,avg,cookiesSoldEachHourArray) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  let Citytotal = 0;
  this.cookiesSoldEachHourArray = cookiesSoldEachHourArray;

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
  // Invoke getCookiesalesPerHour and Create Totals by Store and Total by Hour

  this.getCookieSalesPerHour();
  for (let i = 0; i < hours.length; i++) {
  Citytotal += cookiesSoldEachHourArray[i];
  }
  
  this.render = function() {    
  
  let article = document.createElement('article');
  profileStore.appendChild(article);

  let h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);

  let p = document.createElement('p');
  article.appendChild(p);

  let ul = document.createElement('ul');
  article.appendChild(ul);

};
cityArray.push(this);
}

City.prototype.renderTable = function() {
  let tr = document.createElement('tr');
  cityTableBody.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
  for (let i = 0; i < hours.length; i++) {
    let tdcookie = document.createElement('td');
    tdcookie.textContent = this.cookiesSoldEachHourArray[i];
    tr.appendChild(tdcookie);
  }
};

new City(
  'Seattle',
  23,
  65,
  6.3,
  []
);

// console.log(cityArray.length);
// console.log(cookiesSoldEachHourArray[2]);

new City(
  'Tokyo',
  3,
  24,
  1.2,
  []
);

// console.log(cityArray.length);
// console.log(cookiesSoldEachHourArray[2]);

new City(
  'Dubai',
  11,
  38,
  3.7,
  []
);

// console.log(cityArray.length);
// console.log(cityArray[2]);
// console.log('length' +cookiesSoldEachHourArray.length);
// console.log('value 25 =' +cookiesSoldEachHourArray[25]);

new City(
  'Paris', 
  20,
  38,
  2.3,
  []
);

new City(
  'Lima',
  2,
  16,
  4.6,
[]
);

for (let i = 0; i < cityArray.length; i++) {
cityArray[i].renderTable();
}
