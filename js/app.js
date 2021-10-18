'use strict';

// object for my Seattle Store
const seattleStore = document.getElementById('seattleList');

let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.','12 p.m', '1 p.m.', '2 p.m.','3 p.m', '4 p.m.', '5 p.m.', '6 p.m', '7 p.m.'];
let Seattletotal = 0;
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
    let title = document.createElement('h1');
    title.textContent = this.name ;
    seattleStore.appendChild(title);
  
    for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]} : ${this.cookiesSoldEachHourArray[i]} cookies`;
    seattleStore.appendChild(li);
    Seattletotal += this.cookiesSoldEachHourArray[i];
  }
  let li = document.createElement('li');
  li.textContent = `Total : ${Seattletotal} cookies`;
  seattleStore.appendChild(li);
}
}
seattle.renderTheList();



// object for my Tokyo Store
const tokyoStore = document.getElementById('tokyoList');
let Tokyototal = 0;
let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
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
    let title = document.createElement('h1');
    title.textContent = this.name ;
    tokyoStore.appendChild(title);
  
    for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]} : ${this.cookiesSoldEachHourArray[i]} cookies`;
    tokyoStore.appendChild(li);
    Tokyototal += this.cookiesSoldEachHourArray[i];
  }
  let li = document.createElement('li');
  li.textContent = `Total : ${Tokyototal} cookies`;
  tokyoStore.appendChild(li);
}
}
tokyo.renderTheList();

// object for my Dubai Store
const dubaiStore = document.getElementById('dubaiList');
let Dubaitotal = 0;
let dubai = {
  name: 'Dubai',
  min:11,
  max: 38,
  avg: 3.7,
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
    let title = document.createElement('h1');
    title.textContent = this.name ;
    dubaiStore.appendChild(title);
  
    for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]} : ${this.cookiesSoldEachHourArray[i]} cookies`;
    dubaiStore.appendChild(li);
    Dubaitotal += this.cookiesSoldEachHourArray[i];
  }
  let li = document.createElement('li');
  li.textContent = `Total : ${Dubaitotal} cookies`;
  dubaiStore.appendChild(li);
}
}
dubai.renderTheList();

// object for my Paris Store
const parisStore = document.getElementById('parisList');
let Paristotal = 0;
let paris = {
  name: 'Paris',
  min:20,
  max: 38,
  avg: 2.3,
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
    let title = document.createElement('h1');
    title.textContent = this.name ;
    parisStore.appendChild(title);
  
    for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]} : ${this.cookiesSoldEachHourArray[i]} cookies`;
    parisStore.appendChild(li);
    Paristotal += this.cookiesSoldEachHourArray[i];
  }
  let li = document.createElement('li');
  li.textContent = `Total : ${Paristotal} cookies`;
  parisStore.appendChild(li);
}
}
paris.renderTheList();

// object for my Lima Store
const limaStore = document.getElementById('limaList');
let Limatotal = 0;
let lima = {
  name: 'Lima',
  min:2,
  max: 16,
  avg: 4.6,
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
    let title = document.createElement('h1');
    title.textContent = this.name ;
    limaStore.appendChild(title);
  
    for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]} : ${this.cookiesSoldEachHourArray[i]} cookies`;
    limaStore.appendChild(li);
    Limatotal += this.cookiesSoldEachHourArray[i];
  }
  let li = document.createElement('li');
  li.textContent = `Total : ${Limatotal} cookies`;
  limaStore.appendChild(li);
}
}
lima.renderTheList();