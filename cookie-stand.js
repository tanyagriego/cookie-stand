/*//Location One - PS*/
 var locationOne = new Object ();
  locationOne.name = 'Pioneer Square';
  locationOne.min = 17;
  locationOne.max = 88;
  locationOne.average = 5.2;
    locationOne.CustPerHour = function () {
      return Math.floor(Math.random () * 101);
};


/*Location Two - PA*/
var locationTwo = new Object ();
  locationTwo.name = 'Portland Airport';
  locationTwo.min = 6;
  locationTwo.max = 24;
  locationTwo.average = 1.2;
    locationTwo.CustPerHour = function () {
      return Math.floor(Math.random () * 101);
};

/*Location Three - WS*/
var locationThree = new Object ();
  locationThree.name = 'Washington Square';
  locationThree.min = 11;
  locationThree.max = 38;
  locationThree.average = 1.9;
    locationThree.CustPerHour = function () {
      return Math.floor(Math.random) () * 101);
};

/*Location Four - Sellwood*/
var locationFour = new Object ();
  locationFour.name = 'Sellwood';
  locationFour.min = 20;
  locationFour.max = 48;
  locationFour.average = 3.3;
    locationFour.CustPerHour = function () {
      return Math.floor(Math.random) () * 101);
    }

/*Location Five - PD*/
var locationFive = new Object ();
  locationFive.name = 'Pearl District';
  locationFive.min = 3;
  locationFive.max = 24;
  locationFive.average = 2.6;
