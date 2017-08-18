/*//Location One - PS*/
var locationOne = new Object ();
locationOne.name = 'Pioneer Square';
locationOne.min = 17;
locationOne.max = 88;
locationOne.average = 5.2;
locationOne.CustPerHour = function () {
  var randomCustomer = Math.floor(Math.random () * (locationOne.max - locationOne.min)) + locationOne.min;
  return randomCustomer
};

locationOne.cookiesSold = [];
locationOne.cookiesPerHour = function () {
  for (var index = 0; index < time.length; index++){
    var cookiesSold = locationOne.CustPerHour () * locationOne.average;
    locationOne.cookiesSold.push (cookiesSold);
    }

}

/*Location Two - PA*/
var locationTwo = new Object ();
locationTwo.name = 'Portland Airport';
locationTwo.min = 6;
locationTwo.max = 24;
locationTwo.average = 1.2;
locationTwo.CustPerHour = function () {
  var randomCustomer = Math.floor(Math.random () * (locationTwo.max - locationTwo.min)) + locationTwo.min;
  return randomCustomer
};

locationTwo.cookiesSold = [];
locationTwo.cookiesPerHour = function () {
  for (var index = 0; index < time.length; index++){
    var cookiesSold = locationTwo.CustPerHour () * locationTwo.average;
    locationTwo.cookiesSold.push (cookiesSold);
    }

}

/*Location Three - WS*/
var locationThree = new Object ();
locationThree.name = 'Washington Square';
locationThree.min = 11;
locationThree.max = 38;
locationThree.average = 1.9;
locationThree.CustPerHour = function () {
  var randomCustomer = Math.floor(Math.random () * (locationThree.max - locationThree.min)) + locationThree.min;
  return randomCustomer
};

locationThree.cookiesSold = [];
locationThree.cookiesPerHour = function () {
  for (var index = 0; index < time.length; index++){
    var cookiesSold = locationThree.CustPerHour () * locationThree.average;
    locationThree.cookiesSold.push (cookiesSold);
    }

}

/*Location Four - Sellwood*/
var locationFour = new Object ();
locationFour.name = 'Sellwood';
locationFour.min = 20;
locationFour.max = 48;
locationFour.average = 3.3;
locationFour.CustPerHour = function () {
  var randomCustomer = Math.floor(Math.random () * (locationFour.max - locationFour.min)) + locationFour.min;
  return randomCustomer
};

locationFour.cookiesSold = [];
locationFour.cookiesPerHour = function () {
  for (var index = 0; index < time.length; index++){
    var cookiesSold = locationFour.CustPerHour () * locationFour.average;
    locationFour.cookiesSold.push (cookiesSold);
    }

}

/*Location Five - PD*/
var locationFive = new Object ();
locationFive.name = 'Pearl District';
locationFive.min = 3;
locationFive.max = 24;
locationFive.average = 2.6;
locationFive.CustPerHour = function () {
  var randomCustomer = Math.floor(Math.random () * (locationFive.max - locationFive.min)) + locationFive.min;
  return randomCustomer
};

locationFive.cookiesSold = [];
locationFive.cookiesPerHour = function () {
  for (var index = 0; index < time.length; index++){
    var cookiesSold = locationFive.CustPerHour () * locationFive.average;
    locationFive.cookiesSold.push (cookiesSold);
    }

}

var time = [
  '10am: ',
  '11am: ',
  '12pm: ',
  '1pm: ',
  '2pm: ',
  '3pm: ',
  '4pm: ',
  '5pm: ',
];

document.getElementById('pioneerSquare').innerHTML = locationOne.name;
locationOne.cookiesPerHour ();
for (var index = 0; index < time.length; index++){
  document.getElementById('psTime').innerHTML += "<li>" + time[index] +locationOne.cookiesSold[index] + "</li>"
}
document.getElementById('portlandAirport').innerHTML = locationTwo.name;
locationOne.cookiesPerHour ();
for (var index = 0; index < time.length; index++){
  document.getElementById('paTime').innerHTML += "<li>" + time[index] +locationTwo.cookiesSold[index] + "</li>"
}
document.getElementById('washingtonSquare').innerHTML = locationThree.name;
for (var index = 0; index < time.length; index++) {
  document.getElementById('waTime').innerHTML += "<li>" + time [index] +locationThree.cookiesSold[index] + "</li>"

}
document.getElementById('sellwood').innerHTML = locationFour.name;
for(var index = 0; index < time.length; index++) {
  document.getElementById('swTime').innerHTML += "<li>" + time [index] +locationFour.cookiesSold[index] + "</li>"
}
document.getElementById('pearlDistrict').innerHTML = locationFive.name;
for (var index = 0; index < time.length; index++) {
  document.getElementById('pdTime').innterHTML += "<li>" + time[index] +locationFive.cookiesSold[index] + "</li>"
}
