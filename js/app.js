'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm','3pm', '4pm', '5pm', '6pm', '7pm',"Daily Location Total"];

//create constructor function

const profileStore = document.getElementById('cityList');
const cityTHead = document.querySelector('thead');
const cityTableBody = document.querySelector('tbody');
const cityTFoot = document.querySelector('tfoot');

let cityArray = [];
function City(name,min,max,avg,cookiesSoldEachHourArray,Citytotal) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.Citytotal = Citytotal;
  this.cookiesSoldEachHourArray = cookiesSoldEachHourArray;

  this.getRandomCustomers = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };

  this.getCookieSalesPerHour = function() {
  for (let i = 0; i < hours.length-1; i++) {
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
  }
  };
  // Invoke getCookiesalesPerHour and Create Totals by Store and Total by Hour

  this.getCookieSalesPerHour();
  for (let i = 0; i < hours.length-1; i++) {
  this.Citytotal += cookiesSoldEachHourArray[i];
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

function renderHeader() {
  let tr = document.createElement('tr');
  cityTHead.appendChild(tr);
  let th = document.createElement('th');
  tr.appendChild(th);
  for (let i = 0; i < hours.length; i++) {
  let th= document.createElement('th');
  th.textContent = hours[i];
  tr.appendChild(th);
  }
};
City.prototype.renderTable = function() {
  let tr = document.createElement('tr');
  cityTableBody.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
  for (let i = 0; i < hours.length-1; i++) {
    let tdcookie = document.createElement('td');
    tdcookie.textContent = this.cookiesSoldEachHourArray[i];
    tr.appendChild(tdcookie);
  }
  let tdCitytotal = document.createElement('td');
  tdCitytotal.textContent = this.Citytotal;
  tr.appendChild(tdCitytotal);
};

function renderFooter() {
  let allstoresallhours = 0;
  let tr = document.createElement('tr');
  cityTFoot.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = "Totals";
  tr.appendChild(td);

  for (let i = 0; i < hours.length-1; i++) {
  let td = document.createElement('td');
  let allstorestotalperhour = 0;
   for (let j = 0; j < cityArray.length; j++) {
   allstorestotalperhour += cityArray[j].cookiesSoldEachHourArray[i];
   allstoresallhours += cityArray[j].cookiesSoldEachHourArray[i];
  }
  td.textContent = allstorestotalperhour;
  tr.appendChild(td);
  }
  let tdTotal = document.createElement('td');
  tdTotal.textContent = allstoresallhours;
  tr.appendChild(tdTotal);
};

new City(
  'Seattle',
  23,
  65,
  6.3,
  [],
  0
);

new City(
  'Tokyo',
  3,
  24,
  1.2,
  [],
  0
);

new City(
  'Dubai',
  11,
  38,
  3.7,
  [],
  0
);

new City(
  'Paris', 
  20,
  38,
  2.3,
  [],
  0
);

new City(
  'Lima',
  2,
  16,
  4.6,
  [],
  0
);

renderHeader();
for (let i = 0; i < cityArray.length; i++) {
cityArray[i].renderTable();
}
renderFooter();
console.log(cityArray[0].cookiesSoldEachHourArray[0]);