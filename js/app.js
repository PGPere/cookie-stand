'use strict';

// object for my Seattle Store
const seattleStore = document.getElementById('seattleList');

let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.','12 p.m', '1 p.m.', '2 p.m.','3 p.m', '4 p.m.', '5 p.m.', '6 p.m', '7 p.m.'];


let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHourArray: [],
  // between min and max * avg
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  // console.log(seattle.name) ;
  getCookieSalesPerHour: function() {
     // calculate the cookies sold for all 14 hours
     // write a for loop that uses the length of the hours away in that loop

  for (let i = 0; i < hours.length; i++) {
    // Get the number of customers this hour
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    // that value of total cookies sold that hour on to our array
    this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    // console.log(totalCookiesSoldThisHour);
  }
  },
  renderTheList: function() {
    this.getCookieSalesPerHour();
    // code that will render the lists to the page
    let title = document.createElement('h1');
    title.textContent = "Seattle" ;
    seattleStore.appendChild(title);
  
    for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li')
    li.textContent = `${hours[i]} : ${this.cookiesSoldEachHourArray[i]}`;
    seattleStore.appendChild(li);
    
// // 1. create an element
// let ulElement = document.createElement('ul');
// // 2. (or 3) give that element content

// // 3. (or 2) append it to the DOM
// article.appendChild(ulElement);

  }
}
}
seattle.renderTheList();