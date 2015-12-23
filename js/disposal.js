'use strict';

// setting category to Paper for now, but we'll need a way to pass category fom recycle_this.html
var category = 'Paper';

// grab main div
var mainEl = document.getElementById('mainSection');

// item array
var itemArray = [];

// item constructor
var Item = function(name, parent, disposal, cityUrl) {
  this.name = name;
  this.parent = parent;
  this.disposal = disposal;
  this.cityUrl = cityUrl;
};

// item loader
var addItem = function(name, parent, disposal, cityUrl) {
  var newItem = new Item(name, parent, disposal, cityUrl);
  itemArray.push([name,newItem]);
};

// item data
addItem('Corrugated Cardboard','Paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Cardboard/CardboardCorrugated/index.htm');
addItem('Pizza Boxes','Paper','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/PizzaBoxes/index.htm');
addItem('Stoves','Appliances and Household Items','resuse','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/Stoves/index.htm');

// render items
var renderItems = function() {
  // make page heading
  var headingEl = document.createElement('h1');
  headingEl.appendChild(document.createTextNode(category));
  mainEl.appendChild(headingEl);
  // make unordered list
  var ulEl = document.createElement('ul');
  ulEl.addEventListener('click', renderDisposal);
  mainEl.appendChild(ulEl);
  // make list items
  for (var i = 0; i < itemArray.length; i += 1) {
    if (itemArray[i][1].parent === category) {
      var liEl = document.createElement('li');
      liEl.appendChild(document.createTextNode(itemArray[i][0]));
      ulEl.appendChild(liEl);
    };
  };
};

renderItems();

// disposal array
var disposalArray = [];

// disposal constructor
var Disposal = function(heading, symbol, text) {
  this.heading = heading;
  this.symbol = symbol;
  this.text = text;
};

// render disposables
function renderDisposal(item) {
  var disposalType = 0;
  // loop through items again to find the disposal type for the item
  for (var i = 0; i < itemArray.length; i += 1) {
    if (itemArray[i][0] === item.target.innerHTML) {
        disposalType = itemArray[i][1].disposal;
    };
  };
  console.log('you clicked', item.target.innerHTML, " which is ", disposalType);
  // loop through disposal until something matches the disposal type of our item
  for (var i = 0; i < disposalArray.length; i += 1) {
    if (disposalType === disposalArray[i][0]) {
      console.log(disposalArray[i][1].symbol);
      mainEl.innerHTML = '';
      var h1El = document.createElement('h1');
      var imgEl = document.createElement('img');
      var pEl = document.createElement('p');
      h1El.appendChild(document.createTextNode(disposalArray[i][1].heading));
      imgEl.src = disposalArray[i][1].symbol;
      pEl.appendChild(document.createTextNode(disposalArray[i][1].text));
      mainEl.appendChild(h1El);
      mainEl.appendChild(imgEl);
      mainEl.appendChild(pEl);
    };
  };
}

// disposable loader
var addDisposal = function(heading, symbol, text) {
    var newDisposal = new Disposal(heading, symbol, text);
    disposalArray.push([heading,newDisposal]);
};

// disposable data
addDisposal('recycle','img/recycle_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('compost','img/compost_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('hazard','img/hazard_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('trash','img/trash_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
