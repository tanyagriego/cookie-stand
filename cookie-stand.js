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

  // var simulatedCookies = locationOne.average * randomCustomer

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

var time = [
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
];

document.getElementById('pioneerSquare').innerHTML = locationOne.name;
document.getElementById('portlandAirport').innerHTML = locationTwo.name;
document.getElementById('washingtonSquare').innerHTML = locationThree.name;
document.getElementById('sellwood').innerHTML = locationFour.name;
document.getElementById('pearlDistrict').innerHTML = locationFive.name;
