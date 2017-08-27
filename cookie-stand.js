// Constructor

function StoreDetails (name, min, max, average) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.average = average;
  this.total = 0;
  this.hourlyCookies= [];
  this.time = ['10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ',];
    this.getTableRowInfo = function () {
      var row = document.createElement("tr");
      var nameCell = document.createElement("td");
      nameCell.innerText = this.name;
      row.appendChild(nameCell);
      var minCell = document.createElement("td");
      minCell.innerText = this.min;
      row.appendChild(minCell);
      var maxCell = document.createElement("td");
      maxCell.innerText = this.max;
      row.appendChild(maxCell);
      var averageCell = document.createElement("td");
      averageCell.innerText = this.average;
      row.appendChild(averageCell);

      for (var index = 0; index < this.time.length; index++) {
      var timeCell = document.createElement("td");
      timeCell.innerText = this.hourlyCookies[index];
      row.appendChild(timeCell);
    }
      row.appendChild(timeCell);
      var totalCell = document.createElement("td");
      totalCell.innerText = this.total;
      row.appendChild(totalCell);
      return row;
    }
    this.CustPerHour = function() {
    var randomCustomer = Math.floor(Math.random () * (this.max - this.min)) + this.min;
    return randomCustomer;
  }
    this.cookiesPerHour = function () {
      for (var index = 0; index < this.time.length; index++) {
        var cookiesSold = Math.floor(this.CustPerHour () * this.average);
        this.hourlyCookies.push (cookiesSold);
        this.total += cookiesSold;
      }
    }
};

var storeLocation = [];
storeLocation.push(new StoreDetails ("Pioneer Square", 17, 88, 5.2));
storeLocation.push(new StoreDetails ("Portland Airport", 6, 24, 1.2));
storeLocation.push(new StoreDetails ("Washington Square", 11, 38, 1.9));
storeLocation.push(new StoreDetails ("Sellwood", 20, 48, 3.3));
storeLocation.push(new StoreDetails ("Pearl District", 3, 24, 2.6));

var tableBody =
document.getElementById("storeLocation-table");
for(var index = 0; index < storeLocation.length; index ++) {
  storeLocation[index].cookiesPerHour ();
  tableBody.appendChild(storeLocation[index].getTableRowInfo());
}

function showData() {
  var form = document.forms['newStoreForm'];
  var newName = form.elements['storeName'];
  var minCustomers = form.elements['minCustomers'];
  var maxCustomers = form.elements ['maxCustomers'];
  var avgCustomers = form.elements ['avgCustomers'];
  var message = "New Store:";
  message += "\n Name: "+newName.value;
  message += "\n Min: "+minCustomers.value;
  message += "\n Max: "+maxCustomers.value;
  message += "\n Avg: "+avgCustomers.value;
  newStore = new StoreDetails (newName.value, parseInt(minCustomers.value), parseInt(maxCustomers.value), parseFloat(avgCustomers.value));
  storeLocation.push(newStore);
  newStore.cookiesPerHour ();
  tableBody.appendChild(newStore.getTableRowInfo());

}
