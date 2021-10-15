'use strict';

// object for my Seattle Store
const seattleStore = document.getElementById('seattleList');

let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.','12 p.m', '1 p.m.', '2 p.m.','3 p.m', '4 p.m.', '5 p.m.', '6 p.m', '7 p.m.'];
let dailytotal = 0
let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHourArray: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour: function() {
  for (let i = 0; i < hours.length; i++) {
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
  }
  },
  renderTheList: function() {
    this.getCookieSalesPerHour();
    // code that will render the lists to the page
    let title = document.createElement('h1');
    title.textContent = this.name ;
    seattleStore.appendChild(title);
  
    for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li')
    li.textContent = `${hours[i]} : ${this.cookiesSoldEachHourArray[i]} cookies`;
    seattleStore.appendChild(li);
    dailytotal += this.cookiesSoldEachHourArray[i];
  }
}
}
seattle.renderTheList();
let li = document.createElement('li')
li.textContent = `Total : ${dailytotal} cookies`;
seattleStore.appendChild(li);
