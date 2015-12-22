'use strict';

// setting category to Paper for now, but we'll need a way to pass category fom recycle_this.html
var category = 'Paper';

var mainEl = document.getElementById('mainSection');

var itemArray = [];

var Item = function(name, parent, disposal, cityUrl) {
  this.name = name;
  this.parent = parent;
  this.disposal = disposal;
  this.cityUrl = cityUrl;
};

var renderItems = function() {
  var headingEl = document.createElement('h1');
  headingEl.appendChild(document.createTextNode(category));
  var ulEl = document.createElement('ul');
  var liEl = document.createElement('li');
  liEl.appendChild(document.createTextNode('test1'));
  ulEl.appendChild(liEl);
  var liEl = document.createElement('li');
  liEl.appendChild(document.createTextNode('test2'));
  ulEl.appendChild(liEl);
  mainEl.appendChild(headingEl);
  mainEl.appendChild(ulEl);
};

renderItems();

var addItem = function(name, parent, disposal, cityUrl) {
  var newItem = new Item(name, parent, disposal, cityUrl);
  itemArray.push([name,newItem]);
};

addItem('Corrugated Cardboard','Paper',['recycle'],'http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/Cardboard/CardboardCorrugated/index.htm');
addItem('Pizza Boxes','Paper,'['compost'],'http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/Paper/ContainersBoxesCartons/PizzaBoxes/index.htm');
addItem('Stoves','Appliances and Household Items',['resuse,','dropoff'],'http://www.seattle.gov/util/MyServices/LookItUpWhatsAccepted/AppliancesHouseholdItems/Appliances/Stoves/index.htm');

var disposalArray = [];

var Disposal = function(heading, symbol, text) {
  this.heading = heading;
  this.symbol = symbol;
  this.text = text;
};

Disposal.prototype.render = function() {
  // To come
};

var addDisposal = function(heading, symbol, text) {
    var newDisposal = new Disposal(heading, symbol, text);
    disposalArray.push([heading,newDisposal]);
};

addDisposal('recycle','img/recycle_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('compost','img/compost_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('hazard','img/hazard_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
addDisposal('trash','img/trash_bin.png','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod');
