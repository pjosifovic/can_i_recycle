'use strict';

// global variables
var userCategory = window.location.hash.slice(1);
var userItem = '';
var mainEl = document.getElementById('mainInner');

// array for category keys and headings
var categoryKeys = [
  ['paper', 'Paper'],
  ['metal', 'Metal'],
  ['household_items', 'Household Items & Appliances'],
  ['construction', 'Construction'],
  ['electronics', 'Electronics'],
  ['fabrics', 'Fabrics'],
  ['food', 'Food'],
  ['food_packaing', 'Food Packaging'],
  ['glass_ceramics', 'Glass & Ceramics'],
  ['hazardous_items', 'Hazardous Items'],
  ['platic', 'Plastic'],
  ['vehicle', 'Vehicle'],
  ['wood', 'Wood'],
  ['yard_waste', 'Yard Waste'],
];

// populate category heading
var categoryHeading = '';
for (var i = 0; i < categoryKeys.length; i += 1) {
  if (userCategory === categoryKeys[i][0]) {
    categoryHeading = categoryKeys[i][1];
  };
};

// item array
var itemArray = [];

// item constructor
var Item = function(name, parentKey, disposal, cityUrl) {
  this.name = name;
  this.parentKey = parentKey;
  this.disposal = disposal;
  this.cityUrl = cityUrl;
};

// item loader
var addItem = function(name, parentKey, disposal, cityUrl) {
  var newItem = new Item(name, parentKey, disposal, cityUrl);
  itemArray.push([name,newItem]);
};

// item data
addItem('Corrugated Cardboard','paper','recycle','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Cardboard/CardboardCorrugated/index.htm');
addItem('Pizza Boxes','paper','compost','http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/PizzaBoxes/index.htm');
addItem('Corks','wood','trash','http://www.seattle.gov');
addItem('Pallets','wood','reuse','http://www.seattle.gov');
addItem('Cats','paper','complicated','http://www.zombo.com');

// render items
var renderItems = function() {
  // make page heading
  var headingEl = document.createElement('h1');
  headingEl.appendChild(document.createTextNode(categoryHeading));
  mainEl.appendChild(headingEl);
  // make unordered list
  var ulEl = document.createElement('ul');
  ulEl.addEventListener('click', renderDisposal);
  mainEl.appendChild(ulEl);
  // make list items
  for (var i = 0; i < itemArray.length; i += 1) {
    if (itemArray[i][1].parentKey === userCategory) {
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

// disposal loader
var addDisposal = function(heading, symbol, text) {
  var newDisposal = new Disposal(heading, symbol, text);
  disposalArray.push([heading,newDisposal]);
};

// disposal data
addDisposal('recycle','img/recycle_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('compost','img/compost_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('hazard','img/hazard_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('trash','img/trash_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('reuse','img/reuse.png','Lorem lalalalallalalalalal');
addDisposal('complicated','','It\'s complicated');

// render disposal
function renderDisposal(item) {
  var disposalType = '';
  var itemUrl = '';
  // figure out disposal type and url for item
  for (var i = 0; i < itemArray.length; i += 1) {
    if (itemArray[i][0] === item.target.innerHTML) {
        disposalType = itemArray[i][1].disposal;
        itemUrl = itemArray[i][1].cityUrl;
    };
  };
  console.log(disposalType);
  console.log(itemUrl);

  // render to page
  for (var i = 0; i <disposalArray.length; i += 1) {
    if (disposalType === disposalArray[i][0]) {
      console.log(disposalType);
      mainEl.innerHTML = '';
      var headingEl = document.createElement('h2');
      var imgEl = document.createElement('img');
      var pEl = document.createElement('p');
      headingEl.appendChild(document.createTextNode(disposalArray[i][1].heading));

      if (disposalType === 'complicated') {
        // generate link
      } else {
        imgEl.src = disposalArray[i][1].symbol;
        pEl.appendChild(document.createTextNode(disposalArray[i][1].text));
        pEl.setAttribute("class", "disposalText");
      }

      mainEl.appendChild(headingEl);
      mainEl.appendChild(imgEl);
      mainEl.appendChild(pEl);
    };
  };
}
